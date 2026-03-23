import "./Footer.css"

/**
 * Footer component — displays copyright info and navigation links.
 */
export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				{/* Copyright notice */}
				<span className="footer-content">
					© 2026{" "}
					<a href="#" className="footer-underline">
						Shoppy Globe™
					</a>
					. All Rights Reserved.
				</span>

				{/* Navigation links — hidden on small screens */}
				<ul className="footer-links">
					<li>
						<a href="#" className="footer-link">
							About
						</a>
					</li>
					<li>
						<a href="#" className="footer-link">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="footer-link">
							Licensing
						</a>
					</li>
					<li>
						{/* Contact — no right margin needed as last item */}
						<a href="#" className="footer-underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
