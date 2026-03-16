import "./Navbar.css"

import { Link } from "react-router"

import Cart from "../assets/cart.svg?react"
import Logo from "../assets/logo.svg?react"

export default function Navbar() {
	return (
		<>
			<nav className="navbar-main">
				<Link href="/" className="navbar-link">
					<Logo />
					<span className="navbar-title">Shoppy Globe</span>
				</Link>
				<div className="navbar-actions">
					<Link className="cart-btn" to="/cart">
						<Cart />
					</Link>
				</div>
			</nav>
		</>
	)
}
