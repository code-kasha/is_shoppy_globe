export default function ImageGallery({
	images,
	selectedImage,
	onSelect,
	title,
}) {
	return (
		<div className="image-gallery">
			<img
				src={selectedImage}
				alt={title}
				loading="lazy"
				className="image-gallery-main"
			/>
			<div className="image-gallery-thumbs">
				{images?.map((img, i) => (
					<img
						key={i}
						src={img}
						loading="lazy"
						alt={`${title} view ${i + 1}`}
						onClick={() => onSelect(img)}
						className={`image-gallery-thumb ${selectedImage === img ? "active" : ""}`}
					/>
				))}
			</div>
		</div>
	)
}
