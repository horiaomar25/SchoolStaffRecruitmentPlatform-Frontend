"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import loginimage from '../public/loginimage.jpg';
import logo from '../public/logo.png';
import useAuth from '../customhooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, error, login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  useEffect(() => {
    if (token) {
      // Redirect to the dashboard page upon successful login
      router.push('/dashboard');
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
        <Image 
          src={logo} 
          alt="School Staff Recruitment Logo" 
          width={200} 
          height={100} 
        />
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-xs">
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-3 w-full border border-gray-300 rounded"
            required
          />
          
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 w-full border border-gray-300 rounded"
            required
          />
          
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <button 
            type="submit"
            className="btn btn-wide bg-blue-500 hover:bg-blue-700 text-white"
          >
            Login
          </button>
          
          {token && <p className="text-green-500 mt-4">Login successful!</p>}
        </form>
      </div>
    </main>
  );
}

