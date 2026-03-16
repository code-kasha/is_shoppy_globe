import { createSelector } from "@reduxjs/toolkit"

const selectCartItems = (state) => state.cart.items

export const selectCartItemIds = createSelector(
	selectCartItems,
	(items) => new Set(items.map((item) => item.id)),
)
