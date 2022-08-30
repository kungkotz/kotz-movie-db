import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<h1>Kotz Movie Database</h1>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/movie/popular">
							Popular
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/movie/top">
							Toplist
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/movie/latest">
							In Cinema Now
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/movie/genre">
							Genres
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
