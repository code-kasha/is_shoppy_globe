import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
	return (
		<div className="main-container">
			<Header />
			<main>
				<Outlet />
				<Toaster position="top-right" />
			</main>
			<Footer />
		</div>
	)
}

export default App
