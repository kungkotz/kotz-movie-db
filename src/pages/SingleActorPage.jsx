import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getMoviesByActorId } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const imgLink = "https://image.tmdb.org/t/p/w500";

const SingleActorPage = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useQuery(["actor", id], () =>
		getMoviesByActorId(id)
	);

	return (
		<Container className="py-3">
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			{data && (
				<>
					<div
						key={data.id}
						className="card text-center col-3 mx-auto bg-dark text-white border-0"
					>
						<h1 className="">{data.name}</h1>
						<h4>Born {data.birthday}</h4>
						<img src={imgLink + data.profile_path} alt="" />
					</div>
					<h2 className="text-white text-center mt-5">Biography</h2>
					<Card className="text-white bg-dark border-0">
						<Card.Body>
							<Card.Text className="">{data.biography}</Card.Text>
						</Card.Body>
					</Card>

					<h2 className="text-center">Actors</h2>
					<br></br>
					<Row xs={1} md={4}>
						{data.credits.cast.map((movie) => (
							<>
								<Card key={movie.id} className="text-white bg-dark border-0">
									<h4 className="card-header text-white border-0 text-center">
										{movie.original_title}
									</h4>

									<div
										className="card m-4 text-center border-0"
										as={Link}
										to={`/movie/${movie.id}`}
									>
										<Card.Img
											className="overflow-auto actor-image-overflow text-dark  text-center h-100 "
											variant="top"
											src={imgLink + movie.poster_path}
											alt="There is no poster for this movie"
										></Card.Img>
									</div>

									<Card className="text-white bg-dark border-0 text-center">
										<Card.Body className="mb-5 p-0">
											<Button
												as={Link}
												to={`/movie/${movie.id}`}
												variant="danger"
											>
												Read more
											</Button>
										</Card.Body>
									</Card>
								</Card>
							</>
						))}
					</Row>
				</>
			)}
		</Container>
	);
};

export default SingleActorPage;
