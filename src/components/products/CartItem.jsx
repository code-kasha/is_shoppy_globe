import "./CartItem.css"

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
	return (
		<div className="flex justify-between items-center border rounded-lg p-3 gap-4">
			<div className="flex items-center gap-3">
				<img
					src={item.thumbnail}
					alt={item.title}
					loading="lazy"
					className="w-16 h-16 object-cover rounded"
				/>
				<div>
					<p className="font-semibold">{item.title}</p>
					<p className="text-sm text-gray-600">💲{item.price}</p>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<button
					onClick={onDecrease}
					className="w-8 h-8 border rounded hover:bg-gray-100 transition font-medium"
				>
					-
				</button>
				<span className="w-6 text-center">{item.quantity}</span>
				<button
					onClick={onIncrease}
					className="w-8 h-8 border rounded hover:bg-gray-100 transition font-medium"
				>
					+
				</button>
				<button
					onClick={onRemove}
					className="ml-2 text-red-500 hover:text-red-700 font-semibold transition"
				>
					Remove
				</button>
			</div>
		</div>
	)
}
