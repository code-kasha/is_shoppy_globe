import "./Footer.css"

export default function Footer() {
	return (
		<>
			<footer>
				<div className="footer-container">
					<span className="footer-content">
						© 2026{" "}
						<a href="#" className="footer:underline">
							Shoppy Globe™
						</a>
						. All Rights Reserved.
					</span>
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
							<a href="#" className="footer-underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	)
}
