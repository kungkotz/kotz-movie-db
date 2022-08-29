import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=18ddaf108a92b06062a3ff474f6621da&language=en-US";
const adultCont = "&include_adult=false";
const credits = "&append_to_response=credits";
const movie_credits = "&append_to_response=movie_credits";
const lang = "&language=en-US";

export const get = async (endpoint) => {
	const response = await axios.get(endpoint);

	return response.data;
};

// Get popular movies
export const getPopularMovies = () => {
	return get(`${axios.defaults.baseURL}/movie/popular${API_KEY}${adultCont}`);
};

// Get a single movie
export const getMovieById = (id) => {
	return get(`${axios.defaults.baseURL}/movie/${id}${API_KEY}${credits}`);
};

// Get a single actors movies
export const getMoviesByActorId = (id) => {
	return get(
		`${axios.defaults.baseURL}/person/${id}${API_KEY}${lang}${credits}`
	);
};
export const getLatestMovies = () => {
	return get(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=18ddaf108a92b06062a3ff474f6621da&language=en-US`
	);
};

// Get latest top rated movies
export const getTopRatedMovies = () => {
	return get(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=18ddaf108a92b06062a3ff474f6621da&language=en-US`
	);
};

// Get all genres
export const getGenres = () => {
	return get(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=18ddaf108a92b06062a3ff474f6621da&language=en-US&append_to_response=credits`
	);
};

export const getMoviesByGenreId = (id) => {
	return get(
		`https://api.themoviedb.org/3/discover/movie?api_key=18ddaf108a92b06062a3ff474f6621da&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${id}`
	);
};
