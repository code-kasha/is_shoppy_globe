import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router"
import PageTransition from "./components/PageTransition"

import Header from "./components/Header"
import Footer from "./components/Footer"

import "./App.css"

function App() {
	return (
		<div className="main-container">
			<Header />
			<main>
				<PageTransition>
					<Outlet />
				</PageTransition>
				<Toaster position="top-right" />
			</main>
			<Footer />
		</div>
	)
}

export default App
