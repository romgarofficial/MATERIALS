import {useState,useEffect, useContext} from 'react';
import {Form,Button} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function AddCourse(){

	const navigate = useNavigate();

    const {user} = useContext(UserContext);

	//input states
	const [name,setName] = useState("");
	const [description,setDescription] = useState("");
	const [price,setPrice] = useState("");

	function createCourse(e){

		//prevent submit event's default behavior
		e.preventDefault();

		let token = localStorage.getItem('token');
		console.log(token);

		fetch('http://localhost:4000/courses/',{

			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({

				name: name,
				description: description,
				price: price

			})
		})
		.then(res => res.json())
		.then(data => {

			//data is the response of the api/server after it's been process as JS object through our res.json() method.
			console.log(data);

			if(data.message === "Course already exists"){
				

				Swal.fire({

					icon: "error",
					title: "Course already exists.",
					text: data.message

				})

			} else if (data.success === true) {
				
				Swal.fire({

					icon:"success",
					title: "Course Added successfully."

				})

				navigate("/courses");
				

			} else {

				Swal.fire({

					icon: "error",
					title: "Unsuccessful Course Creation",
					text: data.message

				})
			}

		})

        setName("")
        setDescription("")
        setPrice(0);
	}

	return (

            (user.isAdmin === true)
            ?
            <>
                <h1 className="my-5 text-center">Add Course</h1>
                <Form onSubmit={e => createCourse(e)}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={e => {setName(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => {setDescription(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" required value={price} onChange={e => {setPrice(e.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="my-5">Submit</Button>
                </Form>
		    </>
            :
            <Navigate to="/courses" />

	)


}