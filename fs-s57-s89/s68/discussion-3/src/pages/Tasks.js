import { useEffect, useState, useContext } from 'react';
import TaskCard from '../components/TaskCard';
import UserContext from '../UserContext';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Tasks() {

	const { user } = useContext(UserContext); 
	const [tasks, setTasks] = useState([]);


	const fetchData = () => {


		fetch('http://localhost:4000/tasks/all', {
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			}
		})
		.then(res => res.json())
		.then(data => {

		    if (typeof data.message !== "string") {
		    	setTasks(data.tasks);
		    } else {
		    	setTasks([]);
		    }

		});
	}

    useEffect(() => {

		fetchData()

    }, []);


	return(
		<>
            {
            	user
                ?
                        tasks.length > 0

                        ?
                        <>  
                        <h1 className='text-center mt-5'>Tasks</h1>
                        <Row> 
                            
                                {   

                                    tasks.map(task => { 

                                        return (
                                            <Col md={3}>
                                                <TaskCard task={task} />
                                            </Col>
                                        )
                                        
                                    })
                                }   

                        </Row>

                        </>
                        :
                        <>
                            <h1>No Tasks</h1>
                        </>
                :
                <>
                    <h1>You are not logged in</h1>
                    <Link className="btn btn-primary" to={"/login"}>Login to View</Link>
                </>

        	}
        </>
	)
}











