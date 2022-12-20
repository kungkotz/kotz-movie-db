import React from "react";
import { getGenres } from "../services/api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const GenresPage = () => {
	const { isLoading, isError, error, data } = useQuery("genres", getGenres);

	return (
		<Container className="py-3 bg-dark">
			<h1 className="text-center">Popular Movies</h1>
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			<ListGroup className="d-flex">
				{data &&
					data.genres.map((genre) => (
						<Button
							as={Link}
							to={`${genre.id}`}
							key={genre.id}
							className="movies-overflow text-center bg-dark  text-white mx-auto"
							variant="danger"
						>
							{genre.name}
						</Button>
					))}
			</ListGroup>
		</Container>
	);
};

export default GenresPage;
