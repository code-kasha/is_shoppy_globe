function InfoRow({ label, value }) {
	return (
		<p>
			<strong>{label}:</strong> {value}
		</p>
	)
}

export default function ProductInfo({
	product,
	isInCart,
	outOfStock,
	onAddToCart,
}) {
	return (
		<div className="product-info">
			<InfoRow label="Brand" value={product.brand} />
			<InfoRow label="Category" value={product.category} />
			<InfoRow label="SKU" value={product.sku} />
			<InfoRow label="Price" value={`$${product.price}`} />
			<InfoRow label="Discount" value={`${product.discountPercentage}%`} />
			<InfoRow label="Rating" value={`⭐ ${product.rating}`} />
			<InfoRow label="Stock" value={product.stock} />

			<p className={`stock-status ${outOfStock ? "out" : "in"}`}>
				{outOfStock ? "Out of Stock" : "In Stock"}
			</p>

			<button
				onClick={onAddToCart}
				disabled={outOfStock || isInCart}
				className={`add-to-cart-btn ${outOfStock || isInCart ? "disabled" : ""}`}
			>
				{isInCart ? "In Cart" : "Add to Cart"}
			</button>
		</div>
	)
}
