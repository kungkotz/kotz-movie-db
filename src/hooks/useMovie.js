import { useQuery } from "react-query";
import { getMovieById } from "../services/api";

const useMovie = (id) => {
	return useQuery(["movie", id], () => getMovieById(id));
};

export default useMovie;
