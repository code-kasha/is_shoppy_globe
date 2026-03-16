export default function OfflinePage() {
	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
			<p className="text-4xl">📡</p>
			<h1 className="text-2xl font-bold">You're offline</h1>
			<p className="text-gray-500 text-sm">
				Check your connection and try again.
			</p>
			<button
				onClick={() => window.location.reload()}
				className="mt-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-md transition"
			>
				Retry
			</button>
		</div>
	)
}
