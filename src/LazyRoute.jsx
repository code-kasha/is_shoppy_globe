import { Suspense } from "react"
import Spinner from "./components/Spinner"
import ErrorBoundary from "./components/ErrorBoundary"

// eslint-disable-next-line no-unused-vars
export default function LazyRoute({ component: Component }) {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Spinner message="Loading" />}>
				<Component />
			</Suspense>
		</ErrorBoundary>
	)
}
