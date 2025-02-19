import { useEffect, useState, useContext } from 'react';
import CourseCard from '../components/CourseCard';
// import coursesData from '../data/coursesData';
import UserContext from '../UserContext';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';

export default function Courses() {

	const { user } = useContext(UserContext);

	// Checks to see if the mock data was captured
	// console.log(coursesData);
	// console.log(coursesData[0]);

	// State that will be used to store the courses retrieved from the database
	const [courses, setCourses] = useState([]);


	const fetchData = () => {

		// Allows to have a dynamic url depending whether the user that's logged in is an admin or not
		let fetchUrl = user.isAdmin === true ? "http://localhost:4000/courses/all" : "http://localhost:4000/courses/"

		// headers is included for both /courses/all and /courses/ to allow flexibility even if it is not needed.
		fetch(fetchUrl, {
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			}
		})
		.then(res => res.json())
		.then(data => {
		    
		    console.log(data);
		    console.log(typeof data.message);

		    // Sets the "courses" state to map the data retrieved from the fetch request into several "CourseCard" components
		    // If the data.message is not a string or equal to undefined it will set the courses state with the courses from fetch
		    if (typeof data.message !== "string") {
		    	setCourses(data.courses);
		    } else {
		    	setCourses([]);
		    }

		});
	}


	// Retrieves the courses from the database upon initial render of the "Courses" component
    useEffect(() => {

		fetchData()

    }, []);

	// The "map" method loops through the individual course objects in our array and returns a component for each course
    // Multiple components created through the map method must have a unique key that will help React JS identify which components/elements have been changed, added or removed
    // Everytime the map method loops through the data, it creates a "CourseCard" component and then passes the current element in our coursesData array using the courseProp
    // const courses = coursesData.map(course => {
    //     return (
    //         <CourseCard key={course.id} courseProp={course}/>
    //     );
    // })

	return(
		<>
            {
            	(user.isAdmin === true) ?
            		<AdminView coursesData={courses} fetchData={fetchData} />

            		:

            		<UserView coursesData={courses} />

        	}
        </>
	)
}











