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
import MovieCard from "../components/MovieCard";

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
							<Card.Text className="text-center">{data.biography}</Card.Text>
						</Card.Body>
					</Card>

					<br></br>
					<h2 className="text-white text-center m-5">
						More movies starring {data.name}
					</h2>
					<Row xs={1} md={4}>
						{data.credits.cast.map((movie) => (
							<MovieCard key={movie.id} data={movie} imgLink={imgLink} />
						))}
					</Row>
				</>
			)}
		</Container>
	);
};

export default SingleActorPage;
