import "./ErrorBoundary.css"

import { Component } from "react"

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false, message: null }
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, message: error?.message || "Something went wrong" }
	}

	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught:", error, info)
	}

	render() {
		if (this.state.hasError) {
			return (
				this.props.fallback ?? (
					<div className="error-boundary">
						<p className="error-boundary-title">Something went wrong</p>
						<p className="error-boundary-message">{this.state.message}</p>
						<button
							className="error-boundary-btn"
							onClick={() => this.setState({ hasError: false, message: null })}
						>
							Try again
						</button>
					</div>
				)
			)
		}

		return this.props.children
	}
}
