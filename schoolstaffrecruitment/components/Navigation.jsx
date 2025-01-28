"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useAuth from '../customhooks/useAuth';

const Navigation = () => {
  // State to open and close mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();
  const router = useRouter();

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    router.push('/'); // Redirect to login page after logout
  };

  return (
    <div className="navbar bg-base-100 border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden" 
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {menuOpen && (
            <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-50">
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box mt-3 p-2 shadow h-full w-full flex flex-col justify-center items-center"
                onClick={closeMenu}
              >
                <button onClick={closeMenu} className="absolute top-4 right-4 text-black text-5xl font-bold">
                  &times;
                </button>
                <li className='text-black text-2xl font-semibold mt-8' onClick={closeMenu}>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className='text-black text-2xl font-semibold mt-8' onClick={closeMenu}>
                  <Link href="/profile">Profile</Link>
                </li>
                <li className='text-black text-2xl font-semibold mt-8' onClick={closeMenu}>
                  <Link href="/avaliability">Availability</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <a className="btn btn-ghost text-xl">School Staff</a>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href='/dashboard'><span className='text-lg font-bold hover:text-blue-500'>Dashboard</span></Link>
          </li>
          <li>
            <Link href='/profile'><span className='text-lg font-bold hover:text-blue-500'>Profile</span></Link>
          </li>
          <li>
            <Link href='/avaliability'><span className='text-lg font-bold hover:text-blue-500'>Availability</span></Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={handleLogout} className="btn hover:bg-red-500">Logout</a>
      </div>
    </div>
  );
};

export default Navigation;
