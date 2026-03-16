import { useState, useEffect } from "react"
import axios from "axios"

const BASE_URL = "https://dummyjson.com/products"
const DEBOUNCE_MS = 500

export default function useCartProducts(page, limit, term) {
	const [products, setProducts] = useState([])
	const [total, setTotal] = useState(0)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		let cancelled = false

		async function fetchProducts() {
			setLoading(true)
			setError(null)

			try {
				const url = term
					? `${BASE_URL}/search?q=${encodeURIComponent(term)}&limit=${limit}&skip=${(page - 1) * limit}`
					: `${BASE_URL}?limit=${limit}&skip=${(page - 1) * limit}`

				const res = await axios.get(url)

				if (!cancelled) {
					setProducts(res.data.products)
					setTotal(res.data.total)
				}
			} catch {
				if (!cancelled) {
					setError("Failed to load products")
				}
			} finally {
				if (!cancelled) {
					setLoading(false)
				}
			}
		}

		const timer = term
			? setTimeout(fetchProducts, DEBOUNCE_MS)
			: fetchProducts()

		return () => {
			cancelled = true
			clearTimeout(timer)
		}
	}, [page, limit, term])

	return { products, total, loading, error }
}
