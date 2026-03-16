export default function ImageGallery({
	images,
	selectedImage,
	onSelect,
	title,
}) {
	return (
		<div className="image-gallery">
			<img src={selectedImage} alt={title} className="image-gallery-main" />
			<div className="image-gallery-thumbs">
				{images?.map((img, i) => (
					<img
						key={i}
						src={img}
						alt={`${title} view ${i + 1}`}
						onClick={() => onSelect(img)}
						className={`image-gallery-thumb ${selectedImage === img ? "active" : ""}`}
					/>
				))}
			</div>
		</div>
	)
}
