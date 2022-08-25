import React from "react";
import usePopularMovies from "../hooks/usePopularMovies";
import Container from "react-bootstrap/Container";

const PopularMovies = () => {
	const { data, isError, error, isLoading } = usePopularMovies();
	return (
		<Container className="py-3 text-center">
			{isError && error.message}

			{isLoading && <h2 className="text-center">Loading...</h2>}

			{data && (
				<div>
					<h1>Popular movies</h1>
				</div>
			)}
		</Container>
	);
};

export default PopularMovies;
