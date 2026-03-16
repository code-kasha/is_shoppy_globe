export default function ReviewCard({ review }) {
	return (
		<div className="review-card">
			<p className="review-name">{review.reviewerName}</p>
			<p className="review-stars">{"⭐".repeat(review.rating)}</p>
			<p className="review-comment">{review.comment}</p>
			<p className="review-meta">
				{new Date(review.date).toLocaleDateString()}
			</p>
			<p className="review-meta">{review.reviewerEmail}</p>
		</div>
	)
}
