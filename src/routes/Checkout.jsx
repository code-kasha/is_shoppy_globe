import "./Checkout.css"

import { useState } from "react"
import { useSelector } from "react-redux"
import Bill from "../components/products/Bill"
import useBillGen from "../hooks/useBillGen"

export default function Checkout() {
	const { bill, checkout } = useBillGen()
	const [completedBill, setCompletedBill] = useState(null)
	const cartItems = useSelector((state) => state.cart.items)

	const handleCheckout = () => {
		const completed = checkout()
		if (completed) setCompletedBill(completed)
	}

	if (!cartItems.length && !completedBill) {
		return <p className="cart-">Your cart is empty.</p>
	}

	if (completedBill) {
		return <Bill bill={completedBill} />
	}

	return (
		<div className="checkout-container">
			<h1 className="checkout-heading">Checkout</h1>

			<table className="checkout-table">
				<thead>
					<tr className="table-header">
						<th className="table-head-left">Product</th>
						<th className="table-head">Quantity</th>
						<th className="table-head">Price</th>
						<th className="table-head">Total</th>
					</tr>
				</thead>
				<tbody>
					{bill.items.map((item) => (
						<tr key={item.id} className="table-row">
							<td className="table-head-left">{item.title}</td>
							<td className="table-head">{item.quantity}</td>
							<td className="table-head">${item.price.toFixed(2)}</td>
							<td className="table-head">
								${(item.price * item.quantity).toFixed(2)}
							</td>
						</tr>
					))}
					<tr className="total-container">
						<td className="total-text" colSpan={3}>
							Total
						</td>
						<td className="total">${bill.total.toFixed(2)}</td>
					</tr>
				</tbody>
			</table>

			<div className="confirm">
				<button onClick={handleCheckout} className="confirm-btn">
					Confirm Purchase
				</button>
			</div>
		</div>
	)
}
