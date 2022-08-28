import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../services/api";
import { useQuery } from "react-query";
import Button from "react-bootstrap/button";
import LoadingSpinner from "../components/LoadingSpinner";

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
			{data &&
				data.results.map((movie) => (
					<div
						key={movie.id}
						className="d-flex justify-content-center main-container"
					>
						<div className="card m-4 text-center">
							<h1 className="card-header text-dark">{movie.title}</h1>
							<img src={imgLink + movie.poster_path} alt="" />
							<Button as={Link} to={`/movie/${movie.id}`} variant="primary">
								Read more
							</Button>
						</div>
					</div>
				))}
		</Container>
	);
};

export default PopularMovies;
