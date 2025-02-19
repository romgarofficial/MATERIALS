import '../App.css';
import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function Register() {

	const navigate = useNavigate();

	const { user } = useContext(UserContext);

	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

    const [isActive, setIsActive] = useState(false);

	function register(e) {
		e.preventDefault();

		fetch(`${process.env.REACT_APP_API_URL}/users/register`,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {

			console.log(data);
			
			if(data.message === "Registered Successfully"){

				setEmail('');
				setPassword('');
				setConfirmPassword('');

				Swal.fire({
	        	    title: "Registration Successful",
	        	    icon: "success",
	        	    iconColor: "#FF99CC",
	        	    text: "Thank you for registering!",
	        	    showConfirmButton: false,
  					timer: 1500
	        	});

	        	navigate("/login");

			} else if (data.error === "Email invalid") {

				Swal.fire({
	        	    title: "Email is invalid.",
	        	    icon: "error",
	        	    text: "Please check if the email you provided is correct."
	        	});

			} else if (data.error === "Password must be atleast 8 characters") {

				Swal.fire({
	        	    title: "Password is invalid.",
	        	    icon: "error",
	        	    text: "Please check if the password you provided is correct. It should be at least 8 characters"
	        	});

			} else {
				
				Swal.fire({
	        	    title: "Something went wrong.",
	        	    icon: "error",
	        	    text: "Please try again later or contact us for assistance"
	        	});
			}
		})
	}
    
	useEffect(()=>{
		if((email !== "" && password !=="" && confirmPassword !=="") && (password === confirmPassword)){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	},[email,password,confirmPassword])

	return (
		(user.id !== null) ?
		    <Navigate to="/movies" />
		:
			<>

				<Container fluid >
					<div className='row mt-5 pt-5'>
						<div className='col-md-4 mx-auto'>
							<Form onSubmit={(e) => register(e)} className="w-100">
								<h1 className="text-center ">Register</h1>

								<Form.Group className="mt-4">
									<Form.Label>Email:</Form.Label>
									<Form.Control type="email" placeholder="Enter Email" required value={email} onChange={e => {setEmail(e.target.value)}}/>
								</Form.Group>

								<Form.Group className=" mt-2">
									<Form.Label className="lato-90">Password:</Form.Label>
									<Form.Control type="password" placeholder="Enter Password" required value={password} onChange={e => {setPassword(e.target.value)}}/>
								</Form.Group>

								<Form.Group className=" mt-2 mb-4">
									<Form.Label>Confirm Password:</Form.Label>
									<Form.Control type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={e => {setConfirmPassword(e.target.value)}}/>
								</Form.Group>

								<Container className="text-center">
									{
										isActive ? 
											<Button type="submit" className="btn-success py-2 px-4">Register</Button>	
										: 
											<Button className="btn-success py-2 px-4" disabled>Register</Button>     
									}
								</Container>        				
							</Form>
						</div>
					</div>
				</Container>
			</>		
	)
}