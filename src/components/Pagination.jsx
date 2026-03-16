import "./Pagination.css"

export default function Pagination({ page, totalPages, onPageChange }) {
	return (
		<div className="pagination-container">
			<button
				disabled={page === 1}
				onClick={() => onPageChange(page - 1)}
				className="prev-btn"
			>
				Prev
			</button>

			<p className="target">
				Page {page} of {totalPages}
			</p>

			<button
				disabled={page === totalPages}
				onClick={() => onPageChange(page + 1)}
				className="next-btn"
			>
				Next
			</button>
		</div>
	)
}
