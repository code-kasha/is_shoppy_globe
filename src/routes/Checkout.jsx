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
		return <p className="text-center mt-16 text-lg">Your cart is empty.</p>
	}

	if (completedBill) {
		return <Bill bill={completedBill} />
	}

	return (
		<div className="max-w-3xl mx-auto mt-8 p-4 space-y-6">
			<h1 className="text-2xl font-bold text-center">Checkout</h1>

			<table className="w-full border-collapse shadow-sm rounded-lg">
				<thead>
					<tr className="bg-gray-100 text-sm">
						<th className="border px-4 py-2 text-left">Product</th>
						<th className="border px-4 py-2">Quantity</th>
						<th className="border px-4 py-2">Price</th>
						<th className="border px-4 py-2">Total</th>
					</tr>
				</thead>
				<tbody>
					{bill.items.map((item) => (
						<tr
							key={item.id}
							className="text-center text-sm hover:bg-gray-50 transition"
						>
							<td className="border px-4 py-2 text-left">{item.title}</td>
							<td className="border px-4 py-2">{item.quantity}</td>
							<td className="border px-4 py-2">${item.price.toFixed(2)}</td>
							<td className="border px-4 py-2">
								${(item.price * item.quantity).toFixed(2)}
							</td>
						</tr>
					))}
					<tr className="font-semibold bg-gray-100 text-sm">
						<td className="border px-4 py-2 text-left" colSpan={3}>
							Total
						</td>
						<td className="border px-4 py-2 text-center">
							${bill.total.toFixed(2)}
						</td>
					</tr>
				</tbody>
			</table>

			<div className="text-center">
				<button
					onClick={handleCheckout}
					className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-md transition"
				>
					Confirm Purchase
				</button>
			</div>
		</div>
	)
}
