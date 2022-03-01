import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Home from './pages';
import Signin from './pages/signin'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </Router>
    );
  }


export default App;
