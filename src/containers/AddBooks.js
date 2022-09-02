import React from 'react'

function AddBooks() {
  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid bg-light'>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>Add a book in your library.</p>

                <form className='form-inline justify-content-center'>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Title' required></input>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control mt-3' placeholder='Author' required></input>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-outline-success mt-3'>Add a book</button>
                    </div>
                </form>

            </div>
        </div>

        <div className='container mt-3' style={{minHeight:'200px'}}>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-group'>
                        <li className='list-group-item list-group-item-light d-flex justify-content-between'>Books added here !</li>
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger mt-3 mb-3'>Remove all books</button>
                    </div>
                </div>
            </div>
        </div>

    </main>
  )
}

export default AddBooks
