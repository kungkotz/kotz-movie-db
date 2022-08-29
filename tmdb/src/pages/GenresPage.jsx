import React from "react";
import { getGenres } from "../services/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import ListGroup from "react-bootstrap/ListGroup";

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
						<ListGroup.Item
							as={Link}
							to={`${genre.id}`}
							key={genre.id}
							className="overflow-auto movies-overflow text-center"
						>
							{genre.name}
						</ListGroup.Item>
					))}
			</ListGroup>
		</Container>
	);
};

export default GenresPage;
