import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getMovieById } from "../services/api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import LoadingSpinner from "../components/LoadingSpinner";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const imgLink = "https://image.tmdb.org/t/p/w500";

const SingleMoviePage = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useQuery(["movie", id], () =>
		getMovieById(id)
	);

	return (
		<Container className="py-3">
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			{data && (
				<>
					<div className="card m-4 text-center">
						<h1 className=" text-dark">{data.title}</h1>
						<h2>Released: {data.release_date}</h2>
						<img src={imgLink + data.poster_path} alt="" />
						<p>{data.overview}</p>
					</div>
					<h2 className="text-center">Actors</h2>
					<br></br>
					<Row xs={1} md={2} className="g-4">
						{data.credits.cast.map((actor) => (
							<Card key={actor.id} style={{ width: "10rem" }}>
								<Card.Img
									className="overflow-auto actor-image-overflow  text-center"
									variant="top"
									src={imgLink + actor.profile_path}
								/>
								<Card.Body>
									<Card.Title className="overflow-auto movies-overflow text-center">
										{actor.name}
									</Card.Title>
									<Button
										as={Link}
										to={`/people/${actor.id}`}
										variant="primary"
									>
										More Info
									</Button>
								</Card.Body>
							</Card>
						))}
					</Row>
				</>
			)}
		</Container>
	);
};

export default SingleMoviePage;
