import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MarathonTraining from './pages/MarathonTraining';
import GymTraining from './pages/GymTraining';
import UserStats from './pages/UserStats';
import FitnessGoals from './pages/FitnessGoals';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marathon-training" element={<MarathonTraining />} />
        <Route path="/gym-training" element={<GymTraining />} />
        <Route path="/user-stats" element={<UserStats />} />
        <Route path="/fitness-goals" element={<FitnessGoals />} />
        <Route path="/about-the-developer" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
