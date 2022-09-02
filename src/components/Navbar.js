import React from 'react'

function Navbar() {
  return (
    <header>
      <div className='d-flex flex-column flex-md-row p-3 border-bottom bg-info text-white'>
        <h4 className='mr-md-auto'>
          <a href="/" alt="retour à l'accueil" className='text-decoration-none text-white'>REDUX BOOKS</a>
        </h4>
      </div>
    </header>
  )
}

export default Navbar
