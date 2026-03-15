import { createBrowserRouter } from "react-router"

import App from "./App"
import NotFound from "./routes/NotFound"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
	},
])
