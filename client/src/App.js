import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Importing the Header component
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import AdminPage from './views/AdminPage';
import Dashboard from './components/Dashboard';
import Assignments from './components/Assignments';

function App() {
  return (
    <Router>
      <Header isLoggedIn={true} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
