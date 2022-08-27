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
	console.log("Got me some data? ", id);
	return get(
		`${axios.defaults.baseURL}/person/${id}${API_KEY}${lang}${credits}`
	);
};
