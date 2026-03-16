import "./Spinner.css"

export default function Spinner({ message = "Loading" }) {
	return (
		<div className="spinner-container">
			<div className="spinner-wrap">
				<div className="spinner-rings">
					<div className="ring ring-outer"></div>
					<div className="ring ring-mid"></div>
					<div className="ring ring-inner"></div>
					<div className="ring-center"></div>
				</div>
				<p className="spinner-text">{message}</p>
				<div className="spinner-dots">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	)
}
