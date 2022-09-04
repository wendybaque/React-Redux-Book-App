import React, {useState} from 'react';
import { HiOutlineSearch} from 'react-icons/hi';

function SearchBooks() {

const [title, setTitle] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid bg-light'>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>Indicate the subject of the book to be searched in Google API :</p>

                <form className='form-inline justify-content-center' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='What are you looking for ?' 
                            required 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-outline-success mt-3'>Search <HiOutlineSearch/></button>
                    </div>
                </form>

            </div>
        </div>
            <div className='container mt-3' style={{minHeight:'200px'}}>
                <div className='accordion'>
                    <div className='card mb-2'>
                        <div className='card-header'></div>
                        <div className='collapse' data-parent="accordion">
                            <div className='card-body'>
                                {}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  )
}

export default SearchBooks
