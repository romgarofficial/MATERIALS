import { Card, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function TaskCard({task}) {

	const { _id, name, description, status} = task;
    const navigate = useNavigate();

    function updateTaskStatus(id) {

            fetch(`http://localhost:4000/tasks/${id}`,{

            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(data => {

            console.log(data)

            if (data.error === "Failed to save the task") {

                Swal.fire({

                    icon: "error",
                    title: "Unsuccessful Task Update",
                    text: data.message

                })

            } else {

                Swal.fire({

                    icon:"success",
                    title: "Task Updated"

                })

                window.location.reload() 
            }

        })
    }

    function deleteTask(id) {

            fetch(`http://localhost:4000/tasks/${id}`,{

            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(data => {

            if (data.error === "Failed to save the task") {

                Swal.fire({

                    icon: "error",
                    title: "Unsuccessful Task Creation",
                    text: data.message

                })

            } else {

                Swal.fire({

                    icon:"success",
                    title: "Task Deleted"

                })

                window.location.reload() 
            }

        })
    }

	return (
		<Card className="mt-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Status:</Card.Subtitle>
                <Card.Text>{status}</Card.Text>		        
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
                <button className="btn btn-primary btn-sm" onClick={() => updateTaskStatus(_id)}>Update</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(_id)}>Delete</button>
            </Card.Footer>
        </Card>
		)
}
