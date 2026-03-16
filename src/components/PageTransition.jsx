import { useLocation } from "react-router"
import { useState } from "react"

export default function PageTransition({ children }) {
	const location = useLocation()
	const [visible, setVisible] = useState(true)
	const [prevKey, setPrevKey] = useState(location.key)

	if (location.key !== prevKey) {
		setPrevKey(location.key)
		setVisible(false)
	}

	if (!visible) {
		setTimeout(() => setVisible(true), 50)
	}

	return (
		<div className={`page-transition ${visible ? "visible" : ""}`}>
			{children}
		</div>
	)
}
