import React from "react";
import { getMoviesByGenreId } from "../services/api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "../components/LoadingSpinner";
import CardGroup from "react-bootstrap/CardGroup";
import MovieCard from "../components/MovieCard";

const imgLink = "https://image.tmdb.org/t/p/w500";

const SingleGenrePage = () => {
	const { id } = useParams();
	const { isLoading, isError, error, data } = useQuery(
		["single-genre", id],
		() => getMoviesByGenreId(id)
	);

	return (
		<Container className="py-3">
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			{data && (
				<CardGroup>
					{data &&
						data.results.map((movie) => (
							<MovieCard key={movie.id} data={movie} imgLink={imgLink} />
						))}
				</CardGroup>
			)}
		</Container>
	);
};

export default SingleGenrePage;
