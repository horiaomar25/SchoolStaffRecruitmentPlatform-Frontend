"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Navigation = () => {
  // State to open and close mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  // Function to close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    // Clear token or any other logout logic
    localStorage.removeItem('token'); 
    Cookies.remove('jwtToken'); // Token needs to be removed from cookies.

    // Redirect to login or homepage
    router.push('/'); 
  };

  return (
    <div className="navbar bg-base-100 border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden" 
            onClick={toggleMenu} // Toggle menu on click
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
               
              </ul>
            </div>
          )}
        </div>
        <a className="btn btn-ghost text-xl">School Staff</a>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href='/dashboard'><span className='text-lg font-bold hover:text-blue-500 '>Dashboard</span></Link>
          </li>
          <li>
            <Link href='/profile'><span className='text-lg font-bold hover:text-blue-500 '>Profile</span></Link>
          </li>
          
          <li>
          <Link href='/assignments'><span className='text-lg font-bold hover:text-blue-500'>Assignments</span></Link>
          </li>
        </ul>
      </div>


      
  <div className="navbar-end">
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Logout</button>
<dialog data-testid="logout-modal" id="my_modal_1" className="modal">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Logout</h3>
    <p className="py-4">Would you like to logout?</p>
    <div className="modal-action">
      <form method="dialog">
      <div className="card-actions justify-center flex items-center">
      <button onClick={handleLogout} className="btn btn-primary hover:bg-blue-500 w-20">Yes</button>
      <button className="btn btn-primary hover:bg-blue-500">Cancel</button>
    </div>

     
      </form>
    </div>
  </div>
</dialog>
 </div>
    
    
        
     
    </div>
  );
};

export default Navigation;
