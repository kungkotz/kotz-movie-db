import { useQuery } from "react-query";
import TmdbApi from "../services/TmdbApi";

const usePopularMovies = () => {
	return useQuery("popularMovies", TmdbApi.getPopularMovies);
};

export default usePopularMovies;
