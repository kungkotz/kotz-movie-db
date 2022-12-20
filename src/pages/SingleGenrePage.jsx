import React from "react";
import { getMoviesByGenreId } from "../services/api";

import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "../components/LoadingSpinner";
import CardGroup from "react-bootstrap/CardGroup";
import MovieCard from "../components/MovieCard";
import Button from "react-bootstrap/Button";

const imgLink = "https://image.tmdb.org/t/p/w500";

const SingleGenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
	const page = searchParams.get("page")
		? Number(searchParams.get("page"))
		: null;
	const { id } = useParams();
	const { isLoading, isError, error, data } = useQuery(
		["single-genre", id, page],
		() => getMoviesByGenreId(id, page)
	);

	return (
		<Container className="py-3">
			{isLoading && <LoadingSpinner />}
			{isError && <p>An error occured: {error.message}</p>}

			{data && (
				<CardGroup>
					{data &&
						data.results.map((movie) => (
							<MovieCard key={movie.id} data={movie} imgLink={imgLink} />
						))}
				</CardGroup>
			)}
			{data && (
				<div className="pagination d-flex justify-content-between align-items-center mt-4">
					<Button
						disabled={page <= 1}
						onClick={() => setSearchParams({ page: page - 1 })}
						variant="danger"
					>
						Previous Page
					</Button>
					<span className="text-light">
						Page : {page}/{data.total_pages}
					</span>
					<Button
						onClick={() => setSearchParams({ page: page + 1 })}
						variant="danger"
					>
						Next Page
					</Button>
				</div>
			)}
			{console.log(data)}
		</Container>
	);
};

export default SingleGenrePage;
