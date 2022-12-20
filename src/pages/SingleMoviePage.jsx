import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getMovieById } from "../services/api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const imgLink = "https://image.tmdb.org/t/p/w500";

const SingleMoviePage = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useQuery(["movie", id], () =>
		getMovieById(id)
	);

	return (
		<Container className="py-3 bg-dark text-white">
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			{data && (
				<>
					<div className="card text-center col-3 mx-auto bg-dark text-white border-0">
						<h1 className=" ">{data.title}</h1>
						<p>Released: {data.release_date}</p>
						<img src={imgLink + data.poster_path} alt="" />
						<h4>Description</h4>
						<p>{data.overview}</p>
					</div>
					<h2 className="text-center">Actors</h2>
					<br></br>
					<Row xs={1} md={2} className="g-4">
						{data.credits.cast.map((actor) => (
							<Card
								className="text-white bg-dark border-0"
								key={actor.id}
								style={{ width: "10rem" }}
							>
								<Card.Img
									className="overflow-auto actor-image-overflow  text-center "
									variant="top"
									src={imgLink + actor.profile_path}
									alt="No poster for this actor"
								/>
								<Card.Body>
									<Card.Title className="overflow-auto movies-overflow text-center">
										{actor.name}
									</Card.Title>
									<Card className="text-white bg-dark border-0 text-center">
										<Card.Body className="mb-5 p-0">
											<Button
												as={Link}
												to={`/people/${actor.id}`}
												variant="danger"
											>
												Read more
											</Button>
										</Card.Body>
									</Card>
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
