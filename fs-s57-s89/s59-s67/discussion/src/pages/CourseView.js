import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function CourseView() {

	// The "useParams" hook allows us to retrieve any parameter or the courseId passed via the URL
	const { courseId } = useParams();
	const { user } = useContext(UserContext);
	// Allows us to gain access to methods that will allow us to redirect a user to a different page after enrolling a course

	//an object with methods to redirect the user
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	const enroll = (courseId) => {

		fetch(`http://localhost:4000/users/enroll`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			},
			body: JSON.stringify({
				enrolledCourses: [ {courseId} ],
				totalPrice: price
			})
		})
		.then(res => res.json())
		.then(data => {

			console.log(data);

			if (data.message === 'Admin is forbidden') {

				Swal.fire({
					title: "Admin enrollment error",
					icon: 'error',
					text: "You are an administrator you may not enroll to a course."
				});

			} else if (data.message === 'Enrolled successfully') {

				Swal.fire({
					title: "Successfully enrolled",
					icon: 'success',
					text: "You have successfully enrolled for this course."
				});

				// The "navigate" method allows us to redirect the user to a different page and is an easier approach rather than using the "Navigate" component
				navigate("/courses");

			} else {

				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again."
				});

			}

		});

	};

	useEffect(()=> {

		console.log(courseId);

		fetch(`http://localhost:4000/courses/${courseId}`)
		.then(res => res.json())
		.then(data => {

			console.log(data);

			setName(data.course.name);
			setDescription(data.course.description);
			setPrice(data.course.price);

		});

	}, [courseId]);

	return(
		<Container className="mt-5">
			<Row>
				<Col lg={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body className="text-center">
							<Card.Title>{name}</Card.Title>
							<Card.Subtitle>Description:</Card.Subtitle>
							<Card.Text>{description}</Card.Text>
							<Card.Subtitle>Price:</Card.Subtitle>
							<Card.Text>PhP {price}</Card.Text>
							<Card.Subtitle>Class Schedule</Card.Subtitle>
							<Card.Text>8 am - 5 pm</Card.Text>
							{ user.id !== null ? 
									<Button variant="primary" block="true" onClick={() => enroll(courseId)}>Enroll</Button>
								: 
									<Link className="btn btn-danger btn-block" to="/login">Log in to Enroll</Link>
							}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}