import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

/* Component */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Routes Pages */
import Home from "./pages/Home";
import BackgroundColor from "./pages/BackgroundColor";
import LinearGradient from "./pages/LinearGradient";
import RadialGradient from "./pages/RadialGradient";
import FontSize from "./pages/FontSize";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/Background Color"
					element={<BackgroundColor />}
				/>
				<Route
					path="/Linear Gradient"
					element={<LinearGradient />}
				/>
				<Route
					path="/Radial Gradient"
					element={<RadialGradient />}
				/>
				<Route path="/Font-size" element={<FontSize />} />
			</>
		)
	);
	return (
		<section>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</section>
	);
};

export default App;
