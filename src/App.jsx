import './App.css'
import SignUp from './Components/SignUp'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import Dashboard from './Components/Dashboard'

function App() {
  // const url = process.env.REACT_APP_SERVER_URL;
  // console.log(url)

  return (
  <div>
    <Router>
    <Navbar/>
        <Routes>

          <Route exact path="/" element={<Home/>} />

          <Route exact path="/signup" element={<SignUp/>} />

          <Route exact path="/login" element={<Login/>} />

          <Route exact path="/dashboard" element={<Dashboard/>} />

        </Routes>
      </Router>
  </div>
  )
}

export default App
