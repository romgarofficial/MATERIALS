import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';


export default function AppNavbar() {

	// State to store the user information stored in the login page.
	// const [user, setUser] = useState(localStorage.getItem("access"));
	// console.log(user);

	const { user } = useContext(UserContext);

	return(
		<Navbar bg="light" expand="lg">
			<Container fluid>
			    <Navbar.Brand as={Link} to="/">Zuitt</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ms-auto">
				        <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
				        <Nav.Link as={NavLink} to="/courses" exact="true">Courses</Nav.Link>
				        {(user.id !== null) ? 

								user.isAdmin 
								?
								<>
									<Nav.Link as={Link} to="/addCourse">Add Course</Nav.Link>
									<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
								</>
								:
								<>
									<Nav.Link as={Link} to="/profile">Profile</Nav.Link>
									<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
								</>
							: 
								<>
									<Nav.Link as={Link} to="/login">Login</Nav.Link>
									<Nav.Link as={Link} to="/register">Register</Nav.Link>
								</>
						}
				    </Nav>
			    </Navbar.Collapse>
			</Container>
		</Navbar>
		)
}