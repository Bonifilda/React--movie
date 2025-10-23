import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-sky-700 text-3xl sm:text-black md:text-black">
      <div className="flex mx-auto justify-between item center  md:px-4 py-6">
        <Link to="/" className="text-3xl"> MovieFlix </Link>
      
        <Link to="/" className="hover:bg-sky-800"> Home</Link>
           <Link to="/favorites" className="hover:bg-sky-800"> Favorites </Link>
      </div>
    </nav>
  );
};

export default Navbar;