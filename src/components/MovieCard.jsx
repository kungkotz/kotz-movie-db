import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MovieCard = ({ data, imgLink }) => {
	return (
		<>
			<div className="col-lg-2 bg-dark  bg-dark text-white">
				<Card className="border-0 mx-2">
					<Card.Img variant="top" src={imgLink + data.poster_path} />
					<Card.Body className="text-center bg-dark text-white ">
						<Card.Title className="overflow-auto movies-overflow text-center bg-dark text-white border-0">
							{data.title}
						</Card.Title>

						<Button as={Link} to={`/movie/${data.id}`} variant="danger">
							Read more
						</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default MovieCard;
