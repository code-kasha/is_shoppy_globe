import "./ProductCard.css"

import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import toast from "react-hot-toast"
import { addToCart } from "../../store/cartSlice"
import { selectCartItemIds } from "../../store/selectors"

export default function ProductCard({ product }) {
	const dispatch = useDispatch()
	const cartItemIds = useSelector(selectCartItemIds)
	const isInCart = cartItemIds.has(product.id)

	const handleAddToCart = useCallback(() => {
		dispatch(addToCart(product))
		toast.success(`${product.title} added to cart`)
	}, [dispatch, product])

	return (
		<div className="product-card">
			<img
				src={product.thumbnail}
				alt={product.title}
				className="product-image"
				loading="lazy"
			/>

			<h3 className="product-title">
				<Link to={`/product/${product.id}`}>{product.title}</Link>
			</h3>

			<div className="product-details">
				<p title={"Price"}>💲{product.price}</p>
				<p title={"Rating"}>⭐ {product.rating}</p>
			</div>

			<button
				onClick={handleAddToCart}
				disabled={isInCart}
				className={`add-to-cart ${isInCart ? "inactive" : "active"}`}
			>
				{isInCart ? "In Cart" : "Add to Cart"}
			</button>
		</div>
	)
}
