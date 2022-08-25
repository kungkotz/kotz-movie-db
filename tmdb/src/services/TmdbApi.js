import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// Get popular movies
const getPopularMovies = async () => {
	return await axios.get(`movie/popular?api_key=${API_KEY}`);
};

const exports = {
	getPopularMovies,
};

export default exports;
