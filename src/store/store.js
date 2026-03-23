import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./cartSlice"
import searchReducer from "./searchSlice"

/**
 * Redux store — combines cart and search slices.
 */
export default configureStore({
	reducer: {
		cart: cartReducer,
		search: searchReducer,
	},
})
