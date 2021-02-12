import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            </Link>
            <Link href="/users">
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users List</a>
            </Link>
            <Link href="/api/users">
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users API</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
