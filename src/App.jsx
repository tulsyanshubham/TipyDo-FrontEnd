import './App.css'
import SignUp from './Components/SignUp'
import Navbar from './Components/Navbar'
import Login from './Components/Login'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';

function App() {
  // const url = process.env.REACT_APP_SERVER_URL;
  // console.log(url)

  return (
  <div>
    <Router>
    <Navbar/>
        <Routes>

          <Route exact path="/signup" element={<SignUp/>} />

          <Route exact path="/login" element={<Login/>} />

        </Routes>
      </Router>
  </div>
  )
}

export default App
