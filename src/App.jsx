import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

/* Routes Component */
import Home from "./pages/Home"

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					index
					element={<Home />}
				/>
			</>
		)
	);
	return (
		<section>
			<RouterProvider router={router} />
		</section>
	);
};

export default App;
