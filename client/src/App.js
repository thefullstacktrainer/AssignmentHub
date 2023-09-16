import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Importing the Header component
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import AdminPage from './views/AdminPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
