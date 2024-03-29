import React from "react";
import { getTopRatedMovies } from "../services/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/button";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const imgLink = "https://image.tmdb.org/t/p/w500";

const TopRatedMoviesPage = () => {
	const { isLoading, isError, error, data } = useQuery(
		"top-movie",
		getTopRatedMovies
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

export default TopRatedMoviesPage;
