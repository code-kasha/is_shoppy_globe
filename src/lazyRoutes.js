import { lazy } from "react"

export const ProductList = lazy(() => import("./routes/ProductList"))
export const ProductDetails = lazy(() => import("./routes/ProductDetails"))
export const Cart = lazy(() => import("./routes/Cart"))
export const Checkout = lazy(() => import("./routes/Checkout"))
