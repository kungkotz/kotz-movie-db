import "./assets/scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import PopularMovies from "./pages/PopularMovies";
import SingleMoviePage from "./pages/SingleMoviePage";
import SingleActorPage from "./pages/SingleActorPage";
import LatestMoviesPage from "./pages/LatestMoviesPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import GenresPage from "./pages/GenresPage";
import SingleGenrePage from "./pages/SingleGenrePage";

function App() {
	return (
		<div id="App" className="bg-dark">
			<Navigation />

			<Routes>
				<Route path="/" element={<PopularMovies />} />
				<Route path="/movie/popular" element={<PopularMovies />} />
				<Route path="/movie/:id" element={<SingleMoviePage />} />
				<Route path="/people/:id" element={<SingleActorPage />} />
				<Route path="/movie/latest" element={<LatestMoviesPage />} />
				<Route path="/movie/top" element={<TopRatedMoviesPage />} />
				<Route path="/movie/genre" element={<GenresPage />} />
				<Route path="/movie/genre/:id" element={<SingleGenrePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
