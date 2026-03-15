import { createBrowserRouter } from "react-router"

import App from "./App"

import Cart from "./routes/Cart"
import Checkout from "./routes/Checkout"
import ProductList from "./routes/ProductList"
import ProductDetails from "./routes/ProductDetails"
import NotFound from "./routes/NotFound"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <ProductList />,
			},
			{
				path: "product/:id",
				element: <ProductDetails />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
		],
	},
])
