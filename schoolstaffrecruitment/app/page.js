"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import loginimage from '../public/loginimage.jpg';
import logo from '../public/logo.png';
import useAuth from '@/customhooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { token, error, fetchToken, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [username, setUsername] = useState(''); // Declare username state
  const [password, setPassword] = useState(''); // Declare password state
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for success alert
  const router = useRouter();

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    await fetchToken(username, password); // Pass username and password
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    await register(username, password); // Pass username and password
    setRegistrationSuccess(true); // Set success flag for registration alert
  };

  // Redirect to dashboard after successful login
  useEffect(() => {
    if (token) {
      router.push('/dashboard'); // Only redirect if the token is available (after login)
    }
  }, [token, router]);

  return (
    <main className="flex h-screen">
      <div className="relative hidden lg:block w-1/2">
        <Image
          src={loginimage}
          alt="image of male teacher writing on a notebook"
          layout="fill"
          objectFit="cover"
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-4 md:p-6 lg:p-8">
        <Image src={logo} alt="School Staff Recruitment Logo" width={200} height={100} />

        {/* Toggle Button */}
        <div className="mb-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="btn btn-link text-blue-500 hover:text-blue-700"
          >
            {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
          </button>
        </div>

        {/* Toggle between Login and Register */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="flex flex-col items-center w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              className="mb-4 p-3 w-full border border-gray-300 rounded"
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="mb-4 p-3 w-full border border-gray-300 rounded"
              required
            />

            <button
              type="submit"
              className="btn btn-wide bg-blue-500 hover:bg-blue-700 text-white"
            >
              Login
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {token && <p className="text-green-500 text-sm mt-2">Login successful</p>}
          </form>
        ) : (
          <form onSubmit={handleRegister} className="flex flex-col items-center w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              className="mb-4 p-3 w-full border border-gray-300 rounded"
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="mb-4 p-3 w-full border border-gray-300 rounded"
              required
            />

            <button
              type="submit"
              className="btn btn-wide bg-blue-500 hover:bg-blue-700 text-white"
            >
              Register
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {token && <p className="text-green-500 text-sm mt-2">Registration successful! Logged in automatically.</p>}
          </form>
        )}

        {/* Success Alert after successful registration */}
        {registrationSuccess && !token && (
          <div role="alert" className="alert alert-success mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Registration successful! Please log in to continue.</span>
          </div>
        )}
      </div>
    </main>
  );
}
