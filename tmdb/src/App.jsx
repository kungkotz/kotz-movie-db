import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./assets/scss/App.scss";
import PopularMovies from "./pages/PopularMovies";
import SingleMoviePage from "./pages/SingleMoviePage";
import SingleActorPage from "./pages/SingleActorPage";

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movie/popular" element={<PopularMovies />} />
				<Route path="/movie/:id" element={<SingleMoviePage />} />
				<Route path="/people/:id" element={<SingleActorPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
