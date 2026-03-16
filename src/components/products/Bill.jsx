import { Link } from "react-router"

import "./Bill.css"

export default function Bill({ bill }) {
	return (
		<div className="max-w-3xl mx-auto mt-8 p-4 space-y-6 text-center">
			<h1 className="text-2xl font-bold">Thank you for shopping with us!</h1>

			<div className="bg-gray-50 p-4 rounded-lg shadow-sm text-left space-y-2">
				<h2 className="text-xl font-semibold mb-2">Your Bill</h2>

				{bill.items.map((item) => (
					<div
						key={item.id}
						className="flex justify-between py-1 text-sm border-b last:border-0"
					>
						<span>
							{item.title} x {item.quantity}
						</span>
						<span>${(item.price * item.quantity).toFixed(2)}</span>
					</div>
				))}

				<div className="flex justify-between font-bold text-base pt-2">
					<span>Total</span>
					<span>${bill.total.toFixed(2)}</span>
				</div>
			</div>

			<Link
				to="/"
				className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-md transition"
			>
				Back to Home
			</Link>
		</div>
	)
}
