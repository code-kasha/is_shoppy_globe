import { useState, useEffect } from "react"
import axios from "axios"

export default function useCartProduct(id) {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!id) return

		let cancelled = false

		setProduct(null)
		setLoading(true)
		setError(null)

		async function fetchProduct() {
			try {
				const { data } = await axios.get(`https://dummyjson.com/products/${id}`)

				if (!cancelled) {
					setProduct(data)
				}
			} catch (err) {
				if (!cancelled) {
					setError(err.message || "Failed to fetch product")
				}
			} finally {
				if (!cancelled) {
					setLoading(false)
				}
			}
		}

		fetchProduct()
		return () => {
			cancelled = true
		}
	}, [id])

	return { product, loading, error }
}
