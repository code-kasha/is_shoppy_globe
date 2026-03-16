import { useSelector, useDispatch } from "react-redux"
import {
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
} from "../store/cartSlice"
import { Link, useNavigate } from "react-router"
import CartItem from "../components/products/CartItem"
import toast from "react-hot-toast"

import "./Cart.css"

export default function Cart() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const cartItems = useSelector((state) => state.cart.items)
	const total = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	)
	if (!cartItems.length) {
		return (
			<div className="cart-container-empty">
				<p className="cart-empty">Your cart is empty</p>
				<Link to="/" className="shop-btn">
					Continue Shopping
				</Link>
			</div>
		)
	}

	return (
		<div className="cart-container">
			<h1 className="cart-title">Your Cart</h1>

			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						onIncrease={() => dispatch(increaseQuantity(item.id))}
						onDecrease={() => dispatch(decreaseQuantity(item.id))}
						onRemove={() => {
							dispatch(removeFromCart(item.id))
							toast.success(`${item.title} removed from cart`)
						}}
					/>
				))}
			</div>

			<div className="total-container">
				<p className="total-text">Total: 💲{total.toFixed(2)}</p>
				<button onClick={() => navigate("/checkout")} className="checkout-btn">
					Checkout
				</button>
			</div>
		</div>
	)
}
