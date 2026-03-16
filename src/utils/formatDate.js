export function formatDate(dateStr, options = {}) {
	const d = new Date(dateStr)
	if (isNaN(d)) return "Unknown date"

	return options.dateOnly ? d.toLocaleDateString() : d.toLocaleString()
}
