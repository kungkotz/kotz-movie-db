import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MovieCard = ({ data, imgLink }) => {
	return (
		<div className="col-lg-2">
			<Card>
				<Card.Img variant="top" src={imgLink + data.poster_path} />
				<Card.Body className="text-center">
					<Card.Title className="overflow-auto movies-overflow text-center">
						{data.title}
					</Card.Title>

					<Button as={Link} to={`/movie/${data.id}`} variant="primary">
						Read more
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MovieCard;
