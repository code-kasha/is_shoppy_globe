import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../store/cartSlice"
import toast from "react-hot-toast"

export default function useBillGen() {
	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.cart.items)

	const generateBill = () => {
		if (!cartItems.length) return { items: [], total: 0 }

		try {
			const items = cartItems.map((item) => ({
				...item,
				price: Number(item.price) || 0,
				quantity: Number(item.quantity) || 1,
			}))

			const total = items.reduce(
				(acc, item) => acc + item.price * item.quantity,
				0,
			)

			return { items, total }
		} catch {
			toast.error("Failed to generate bill")
			return { items: [], total: 0 }
		}
	}

	const checkout = () => {
		if (!cartItems.length) {
			toast.error("Cart is empty")
			return null
		}

		try {
			const billData = generateBill()
			toast.success("Purchase successful!")
			dispatch(clearCart())
			return billData
		} catch {
			toast.error("Checkout failed, please try again")
			return null
		}
	}

	return { bill: generateBill(), checkout }
}
