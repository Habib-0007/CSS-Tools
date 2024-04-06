import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

/* Component */
import Header from "./components/Header";

/* Routes Component */
import Home from "./pages/Home";
import BackgroundColor from "./pages/BackgroundColor";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="Background Color"
					element={<BackgroundColor />}
				/>
			</>
		)
	);
	return (
		<section>
		<Header />
			<RouterProvider router={router} />
		</section>
	);
};

export default App;
