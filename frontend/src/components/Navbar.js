import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Check if JWT exists in localStorage
  const isAuthenticated = !!localStorage.getItem('jwt');

  const handleLogout = () => {
    localStorage.removeItem('jwt'); // Clear the token
    navigate('/'); // Redirect to home or login
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Fitness Planner
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/dashboard" className="hover:text-indigo-200">
            Dashboard
          </Link>
          <Link to="/about-the-developer" className="hover:text-indigo-200">
            About the Developer
          </Link>

          {/* Authentication Buttons */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-700 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
