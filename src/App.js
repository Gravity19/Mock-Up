import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/Register" exact element={<Register/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
