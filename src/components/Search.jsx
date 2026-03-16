import "./Search.css"

import { useDispatch, useSelector } from "react-redux"
import { setSearchTerm, clearSearchTerm } from "../store/searchSlice"

export default function Search() {
	const dispatch = useDispatch()
	const term = useSelector((state) => state.search.term)
	return (
		<div className="search-container">
			<input
				type="text"
				value={term}
				name="search"
				onChange={(e) => dispatch(setSearchTerm(e.target.value))}
				placeholder="Search products..."
				className="search-input"
			/>
			{term && (
				<button
					onClick={() => dispatch(clearSearchTerm())}
					className="clear-btn"
				>
					Clear
				</button>
			)}
		</div>
	)
}
