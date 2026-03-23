import "./PageTransition.css"

import { useLocation } from "react-router"
import { useState } from "react"

/**
 * PageTransition component — wraps page content and triggers a fade+slide-up
 * animation on every route change.
 * @param {React.ReactNode} children - The page content to animate.
 */
export default function PageTransition({ children }) {
	const location = useLocation()
	const [visible, setVisible] = useState(true)
	const [prevKey, setPrevKey] = useState(location.key)

	/* When the route changes, hide the content briefly to re-trigger the transition */
	if (location.key !== prevKey) {
		setPrevKey(location.key)
		setVisible(false)
	}

	/* After a short delay, make the content visible again to play the animation */
	if (!visible) {
		setTimeout(() => setVisible(true), 50)
	}

	return (
		<div className={`page-transition ${visible ? "visible" : ""}`}>
			{children}
		</div>
	)
}
