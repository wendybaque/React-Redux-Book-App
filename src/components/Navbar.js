import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className='d-flex flex-column flex-md-row p-3 border-bottom bg-info text-white'>
        <h4 className='mr-md-auto'>
          <a href="/" alt="retour à l'accueil" className='text-decoration-none text-white'>REDUX BOOKS</a>
        </h4>
        <nav className='btn-group p-3'>
          <Link to="/" className='btn btn-light'>Home</Link>
          <Link to="/search" className='btn btn-light'>Search a book</Link>
        </nav>
      </div>
      
    </header>
  )
}

export default Navbar
