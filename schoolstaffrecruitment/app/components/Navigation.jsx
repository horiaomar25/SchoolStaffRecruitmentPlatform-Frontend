import React from 'react'

const Navigation = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-64  text-black flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-6">My App</h1>
        <ul className="space-y-4">
          <li>
            <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">
              Profile
            </a>
          
          </li>
          <li>
            <a href="/avaliability" className="block py-2 px-4 rounded hover:bg-gray-700">
             Avalibility
            </a>
          
          </li>
        </ul>
      </nav>

      
    </div>
  )
}

export default Navigation