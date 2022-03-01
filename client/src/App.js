import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages';
import Signin from './pages/signin'
import Mentors from './pages/Mentors'
import './App.css'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/Mentors" element={<Mentors/>} />
        </Routes>
      </Router>
    );
  }


export default App;
