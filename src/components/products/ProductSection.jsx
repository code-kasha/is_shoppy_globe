export default function ProductSection({ title, children }) {
	return (
		<section className="product-section">
			<h2 className="product-section-title">{title}</h2>
			{children}
		</section>
	)
}
