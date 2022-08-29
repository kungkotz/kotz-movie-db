import React from "react";
import { getLatestMovies } from "../services/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/button";
import { Link } from "react-router-dom";

const imgLink = "https://image.tmdb.org/t/p/w500";

const LatestMoviesPage = () => {
	const { id } = useParams();
	const { isLoading, isError, error, data } = useQuery(
		"cinema-movies",
		getLatestMovies
	);
	return (
		<Container className="py-3">
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			{data && (
				<Row xs={1} md={2} className="g-4">
					{data.results.map((movie) => (
						<Card key={movie.id} style={{ width: "10rem" }}>
							<Card.Img
								className="overflow-auto actor-image-overflow  text-center"
								variant="top"
								src={imgLink + movie.poster_path}
							/>
							<Card.Body>
								<Card.Title className="overflow-auto movies-overflow text-center">
									{movie.title}
								</Card.Title>
								<Button as={Link} to={`/movie/${movie.id}`} variant="primary">
									Read more
								</Button>
							</Card.Body>
						</Card>
					))}
				</Row>
			)}
		</Container>
	);
};

export default LatestMoviesPage;
