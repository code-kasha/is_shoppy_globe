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
					if (axios.isAxiosError(err)) {
						if (err.response?.status === 404) {
							setError("Product not found")
						} else if (err.response) {
							setError("Something went wrong, please try again")
						} else if (!navigator.onLine) {
							setError("You are offline. Please check your connection.")
						} else {
							setError("Network error, check your connection")
						}
					} else {
						setError("An unexpected error occurred")
					}
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
