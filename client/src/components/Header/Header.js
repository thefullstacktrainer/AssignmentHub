import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
            <div className="flex items-center">
                <Link to="/">
                    <img src="" alt="Assignment Hub Logo" className="w-48" />
                </Link>
            </div>
            <nav className="flex gap-4">
                <Link to="/" className="text-black no-underline">Home</Link>
                {isLoggedIn && <Link to="/dashboard" className="text-black no-underline">Dashboard</Link>}
                {isLoggedIn && <Link to="/assignments" className="text-black no-underline">Assignments</Link>}
                {isLoggedIn && <Link to="/profile" className="text-black no-underline">Profile</Link>}
                {!isLoggedIn && <Link to="/login" className="text-black no-underline">Login</Link>}
                {!isLoggedIn && <Link to="/register" className="text-black no-underline">Register</Link>}
                {isLoggedIn && <button onClick={onLogout} className="text-black bg-transparent border-none">Logout</button>}
            </nav>
        </header>
    );
};

export default Header;
