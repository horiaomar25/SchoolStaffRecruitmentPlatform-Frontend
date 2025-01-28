"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import loginimage from '../public/loginimage.jpg';
import logo from '../public/logo.png';


export default function Home() {



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
        
        <form  className="flex flex-col items-center w-full max-w-xs">
          <input 
            type="text" 
            placeholder="Enter your username" 
            
            className="mb-4 p-3 w-full border border-gray-300 rounded"
            required
          />
          
          <input 
            type="password" 
            placeholder="Enter your password" 
           
            className="mb-4 p-3 w-full border border-gray-300 rounded"
            required
          />
          
          
          
          <button 
            type="submit"
            className="btn btn-wide bg-blue-500 hover:bg-blue-700 text-white"
          >
            Login
          </button>
          
          
        </form>
      </div>
    </main>
  );
}

