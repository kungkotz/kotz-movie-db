import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getMovieById } from "../services/api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import LoadingSpinner from "../components/LoadingSpinner";

const imgLink = "https://image.tmdb.org/t/p/w500";

const SingleMoviePage = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useQuery(["movie", id], () =>
		getMovieById(id)
	);

	return (
		<Container className="py-3">
			{console.log(
				"isLoading? ",
				isLoading,
				"isError? ",
				isError,
				"typeof? ",
				error,
				"got me some data? ",
				data
			)}
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}
			{data && (
				<div
					key={data.id}
					className="d-flex justify-content-center main-container"
				>
					<div className="card m-4 text-center">
						<h1 className="card-header text-dark">{data.title}</h1>
						<h2>Released: {data.release_date}</h2>
						<img src={imgLink + data.poster_path} alt="" />
						<p>{data.overview}</p>
						{data.credits.cast.map((actor) => (
							<div
								key={actor.id}
								className="d-flex justify-content-center main-container"
							>
								<div className="card m-4 text-center">
									<h1 className="card-header text-dark">{actor.name}</h1>
									<img src={imgLink + actor.profile_path} alt="" />
									<Button
										as={Link}
										to={`/people/${actor.id}`}
										variant="primary"
									>
										Read more
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</Container>
	);
};

export default SingleMoviePage;
