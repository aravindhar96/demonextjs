// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="bg-red-500 w-6 h-6 rounded-full inline-block"></span>&nbsp;&nbsp;Legalz
        </h1>
        <nav className="hidden md:flex items-center justify-center">
          <Link href="/" className="mr-5 cursor-pointer text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-lg font-medium">
            <span>Home</span>
          </Link>
          <Link href="/create" className="mr-5 cursor-pointer text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-lg font-medium">
            <span>Create</span>
          </Link>
          <Link href="/legals" className="mr-5 cursor-pointer text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-lg font-medium">
            <span>Legals</span>
          </Link>
          <Link href="/contracts" className="mr-5 cursor-pointer text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-lg font-medium">
            <span>Contracts</span>
          </Link>
        </nav>
        <nav className="hidden md:flex items-center">
          <Link href="/login">
            <span className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100">Logout</span>
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <span>Home</span>
          </Link>
          <Link href="/create" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <span>Create</span>
          </Link>
          <Link href="/legals" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <span>Legals</span>
          </Link>
          <Link href="/contracts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <span>Contracts</span>
          </Link>
          <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
