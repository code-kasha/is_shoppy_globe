import { useNavigate } from "react-router"
import "./NotFound.css"

function NotFound() {
	const navigate = useNavigate()

	return (
		<div className="nf-main-container">
			<p className="nf-main-text">404</p>
			<h1 className="nf-sub-text">Page not found</h1>
			<p className="nf-error-text">
				Sorry, we couldn't find the page you're looking for.
			</p>
			<div className="nf-nav">
				<button onClick={() => navigate("/")} className="nf-home-link">
					Go home
				</button>
				<button onClick={() => navigate(-1)} className="nf-back-link">
					Go back
				</button>
			</div>
		</div>
	)
}

export default NotFound
