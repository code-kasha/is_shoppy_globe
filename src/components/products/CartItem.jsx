import "./CartItem.css"

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
	return (
		<div className="cart-item-container">
			<div className="cart-item">
				<img
					src={item.thumbnail}
					alt={item.title}
					loading="lazy"
					className="cart-item-img"
				/>
				<div>
					<p className="cart-item-title">{item.title}</p>
					<p className="cart-item-price">💲{item.price}</p>
				</div>
			</div>

			<div className="cart-item-quantity-container">
				<button onClick={onDecrease} className="decrease-quantity-btn">
					-
				</button>
				<span className="quantity">{item.quantity}</span>
				<button onClick={onIncrease} className="increase-quantity-btn">
					+
				</button>
				<button onClick={onRemove} className="remove-btn">
					Remove
				</button>
			</div>
		</div>
	)
}
