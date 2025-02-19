import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Courses from './pages/Courses';
import CourseView from './pages/CourseView';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import AddCourse from './pages/AddCourse';
import Profile from './pages/Profile';
import './App.css';
import { UserProvider } from './UserContext';

// React JS is a single page application (SPA)
// Whenever a link is clicked, it functions as if the page is being reloaded but what it actually does is it goes through the process of rendering, mounting, rerendering and unmounting components
// When a link is clicked, React JS changes the url of the application to mirror how HTML accesses its urls
// It renders the component executing the function component and it's expressions
// After rendering it mounts the component displaying the elements
// Whenever a state is updated or changes are made with React JS, it rerenders the component
// Lastly, when a different page is loaded, it unmounts the component and repeats this process
// The updating of the user interface closely mirrors that of how HTML deals with page navigation with the exception that React JS does not reload the whole page
function App() {

  // State hook for the user state that's defined here for a global scope
  // Initialized as an object with properties from the localStorage
  // This will be used to store the user information and will be used for validating if a user is logged in on the app or not
    const [user, setUser] = useState({
      id: null,
      isAdmin: null
    });

    // Function for clearing localStorage on logout
    const unsetUser = () => {

      localStorage.clear();

    };

    //Because our user state's values are reset to null every time the user reloads the page (thus logging the user out), we want to use React's useEffect hook to fetch the logged-in user's details when the page is reloaded. By using the token saved in localStorage when a user logs in, we can fetch the their data from the database, and re-set the user state values back to the user's details.
    useEffect(() => {

    // console.log(user);
    fetch(`http://localhost:4000/users/details`, {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // Set the user states values with the user details upon successful login.
      if (typeof data.user !== "undefined") {

        setUser({
          id: data.user._id,
          isAdmin: data.user.isAdmin
        });

      // Else set the user states to the initial values
      } else {

        setUser({
          id: null,
          isAdmin: null
        });

      }

    })

    }, []);

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <AppNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseView />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/addCourse" element={<AddCourse />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;