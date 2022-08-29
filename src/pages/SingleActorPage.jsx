import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import { getMoviesByActorId } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

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
				<div
					key={data.id}
					className="d-flex justify-content-center main-container"
				>
					<div className="card m-4 text-center">
						<h1 className="card-header text-dark">{data.name}</h1>
						<h2>Born {data.birthday}</h2>
						<img src={imgLink + data.profile_path} alt="" />
						{data.credits.cast.map((movie) => (
							<div
								key={movie.id}
								className="d-flex justify-content-center main-container"
							>
								<div className="card m-4 text-center">
									<h1 className="card-header text-dark">
										{movie.original_title}
									</h1>
									<img src={imgLink + movie.poster_path} alt="" />
									<Button as={Link} to={`/movie/${movie.id}`} variant="primary">
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

export default SingleActorPage;
