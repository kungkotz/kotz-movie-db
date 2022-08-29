import React from "react";
import Container from "react-bootstrap/Container";

import { getPopularMovies } from "../services/api";
import { useQuery } from "react-query";

import LoadingSpinner from "../components/LoadingSpinner";

import CardGroup from "react-bootstrap/CardGroup";
import MovieCard from "../components/MovieCard";

const imgLink = "https://image.tmdb.org/t/p/w500";

const PopularMovies = () => {
	const { isLoading, isError, error, data } = useQuery(
		"popular-movie",
		getPopularMovies
	);
	return (
		<Container className="py-3">
			<h1 className="text-center">Popular Movies</h1>
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			<CardGroup>
				{data &&
					data.results.map((movie) => (
						<MovieCard key={movie.id} data={movie} imgLink={imgLink} />
					))}
			</CardGroup>
		</Container>
	);
};

export default PopularMovies;
