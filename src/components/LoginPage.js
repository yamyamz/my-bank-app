import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import coverPic from '../assets/coverpic1.avif';
import NavBar from './NavBar.js'; // Import the Navbar component
import Footer from './Footer.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Front-end validation
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long, contain one uppercase letter, and one special character.');
      return;
    }

    // Reset error and simulate login success
    setError('');
    alert('Login successful! (This is just a front-end example)');

    // After successful login, redirect to Dashboard
    navigate('/dashboard');

    // Reset form fields after login
    setEmail('');
    setPassword('');
  };

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      {/* NavBar */}
      <NavBar />

      <div className="w-full min-h-screen flex bg-black text-white">
        {/* Left side: Text overlay and image */}
        <div className="w-full h-screen relative">
          <img src={coverPic} className="w-full h-full object-cover" alt="Cover" />
          <div className="absolute top-[25%] left-[10%] flex flex-col">
            <h1 className="text-4xl font-bold my-4">Welcome to DBS Bank</h1>
            <p className="text-xl font-semibold">
              Start banking with us today, Live more, Bank less.
            </p>
          </div>
        </div>

        {/* Right side: Login content */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-black px-8">
          <h1 className="text-3xl font-bold mb-4">Log In</h1>
          <p className="text-gray-300 mb-6 text-center">
            Welcome back! Please log in to your account.
          </p>

          {/* Login Form */}
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium mb-2 text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium mb-2 text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
