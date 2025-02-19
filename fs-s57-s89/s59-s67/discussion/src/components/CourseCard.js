import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CourseCard({courseProp}) {

	// Checks to see if the data was successfully passed
	// console.log(props);
	// Every component recieves information in a form of an object
	// console.log(typeof props);

	// Deconstruct the course properties into their own variables
	const { _id, name, description, price} = courseProp;


	// const [count, setCount] = useState(0);
	// console.log(useState(0));

	// const [seats, setSeats] = useState(10);

	// function enroll(){
    //     if (seats > 0) {
    //         setCount(count + 1);
    //         console.log('Enrollees: ' + count);
    //         setSeats(seats - 1);
    //         console.log('Seats: ' + seats)
    //     } else {
    //         alert("No more seats available");
    //     };
    // }

	return (
		<Card className="mt-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
		        <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
            </Card.Body>
        </Card>
		)
}


CourseCard.propTypes = {
    // The "shape" method is used to check if a prop object conforms to a specific "shape"
    course: PropTypes.shape({
        // Define the properties and their expected types
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}

