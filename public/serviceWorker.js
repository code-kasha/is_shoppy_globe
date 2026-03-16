// ============================================================
// Service Worker — Vite React Ecommerce App
// Strategy:
//   • Static/local assets  → Cache First
//   • Navigation requests  → Network First
//   • API / dynamic data   → Network Only (no caching)
// ============================================================

const CACHE_VERSION = "v1"
const STATIC_CACHE = `static-${CACHE_VERSION}`
const PAGES_CACHE = `pages-${CACHE_VERSION}`

const STATIC_ASSETS = [
	"/", // ← add this
	"/index.html", // ← and this
	"/manifest.json",
	"/favicon.ico",
	"/favicon-16x16.png",
	"/favicon-32x32.png",
	"/icons/android-chrome-192x192.png",
	"/icons/android-chrome-512x512.png",
	"/icons/apple-touch-icon.png",
]
// ─── Install ────────────────────────────────────────────────
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(STATIC_CACHE)
			.then((cache) => cache.addAll(STATIC_ASSETS))
			.then(() => self.skipWaiting()),
	)
})

// ─── Activate ───────────────────────────────────────────────
self.addEventListener("activate", (event) => {
	const CURRENT_CACHES = [STATIC_CACHE, PAGES_CACHE]

	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) =>
				Promise.all(
					cacheNames
						.filter((name) => !CURRENT_CACHES.includes(name))
						.map((name) => caches.delete(name)),
				),
			)
			.then(() => self.clients.claim()),
	)
})

// ─── Fetch ──────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
	const { request } = event
	const url = new URL(request.url)

	if (request.method !== "GET") return
	if (url.origin !== self.location.origin) return
	if (url.pathname.startsWith("/@")) return

	// ── Route: static public-folder assets ──────────────────
	if (isStaticAsset(url.pathname)) {
		event.respondWith(cacheFirst(request, STATIC_CACHE))
		return
	}

	// ── Route: Vite-built JS / CSS / image chunks ────────────
	if (isViteBuildAsset(url.pathname)) {
		event.respondWith(cacheFirst(request, STATIC_CACHE))
		return
	}

	// ── Route: HTML navigation requests ─────────────────────
	if (request.mode === "navigate") {
		event.respondWith(networkFirstWithOfflineFallback(request))
		return
	}

	// ── Default: handled natively by the browser ───────────────
})

// ─── Dedicated message handler ──────────────────────────────
self.addEventListener("message", (event) => {
	if (event.data?.type === "SKIP_WAITING") {
		self.skipWaiting()
	}
})

// ============================================================
// Helpers
// ============================================================

/**
 * Returns true for files that live in /public and are
 * pre-cached during install.
 */
function isStaticAsset(pathname) {
	return STATIC_ASSETS.some((asset) => asset === pathname)
}

/**
 * Returns true for Vite's content-hashed build output under
 * /assets/ (e.g. /assets/index-Dh3kL9.js).
 */
function isViteBuildAsset(pathname) {
	return pathname.startsWith("/assets/")
}

// ─── Strategy: Cache First ───────────────────────────────────
async function cacheFirst(request, cacheName) {
	const cache = await caches.open(cacheName)
	const cached = await cache.match(request)

	if (cached) return cached

	try {
		const networkResponse = await fetch(request)
		// Only cache successful, non-opaque responses.
		if (networkResponse.ok) {
			cache.put(request, networkResponse.clone())
		}

		return networkResponse
	} catch {
		// Nothing cached and network failed — caller handles this.
		return new Response("Resource unavailable offline.", {
			status: 503,
			headers: { "Content-Type": "text/plain" },
		})
	}
}

// ─── Strategy: Network First with Offline Fallback ───────────
async function networkFirstWithOfflineFallback(request) {
	const cache = await caches.open(PAGES_CACHE)

	try {
		const networkResponse = await fetch(request)

		if (networkResponse.ok) {
			cache.put(request, networkResponse.clone())
		}

		return networkResponse
	} catch {
		const cached = await cache.match(request)
		if (cached) return cached

		// Try root — covers all SPA routes
		const indexPage =
			(await cache.match("/")) ||
			(await cache.match("/index.html")) ||
			(await caches.match("/")) ||
			(await caches.match("/index.html")) // ← search all caches

		if (indexPage) return indexPage
	}
}
