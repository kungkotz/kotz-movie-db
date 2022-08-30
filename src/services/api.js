import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;
const adultFalse = "include_adult=false";
const credits = "append_to_response=credits";
const lang = "language=en-US";

export const get = async (endpoint) => {
	const response = await axios.get(endpoint);

	return response.data;
};

// Get popular movies
export const getPopularMovies = () => {
	return get(
		`${axios.defaults.baseURL}/movie/popular?api_key=${API_KEY}&${lang}&${adultFalse}`
	);
};

// Get a single movie
export const getMovieById = (id) => {
	return get(
		`${axios.defaults.baseURL}/movie/${id}?api_key=${API_KEY}&${adultFalse}&${credits}`
	);
};

// Get a single actors movies
export const getMoviesByActorId = (id) => {
	return get(
		`${axios.defaults.baseURL}/person/${id}?api_key=${API_KEY}&${lang}&${credits}`
	);
};
export const getLatestMovies = () => {
	return get(
		`${axios.defaults.baseURL}/movie/now_playing?api_key=${API_KEY}&${lang}`
	);
};

// Get latest top rated movies
export const getTopRatedMovies = () => {
	return get(
		`${axios.defaults.baseURL}/movie/top_rated?api_key=${API_KEY}&${lang}`
	);
};

// Get all genres
export const getGenres = () => {
	return get(
		`${axios.defaults.baseURL}/genre/movie/list?api_key=${API_KEY}&${lang}&${credits}`
	);
};

export const getMoviesByGenreId = (id, page) => {
	return get(
		`${axios.defaults.baseURL}/discover/movie?api_key=${API_KEY}&${lang}&${adultFalse}&with_genres=${id}&page=${page}`
	);
};
