import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import './App.css';

import {  } from './UserContext';

function App() {

    const [user, setUser] = useState({
      id: null,
      isAdmin: null
    });

    useE(() => {

      fetch(`http://localhost:4000/users/details`, {
        headers: {
          Authorization: `Bearer ${ localStorage.getItem('token') }`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (typeof data.user !== "undefined") {
  
          setUser({
            id: data.user._id,
            isAdmin: data.user.isAdmin
          });
  
        } else {
  
          setUser({
            id: null,
            isAdmin: null
          });
  
        }
  
      })
  
      }, []);

    const unsetUser = () => {

      localStorage.clear();

    };



  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <AppNavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
{/*             <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;