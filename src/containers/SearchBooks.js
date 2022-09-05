import React, {useState} from 'react';
import {HiOutlineSearch} from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../redux/actions/actionFetchBooks'

function SearchBooks() {

    const [title, setTitle] = useState('');

    const state = useSelector(state => state.search)
    const dispatch = useDispatch()

    console.log(state);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchBooks(title))
    }

   const displayFetchedBooks = state.isLoading ? (
        <div className='d-flex justify-content-center'>
            <div className='spinner-boarder text-info' role="status">
                <span className='sr-only'>Loading...</span>
            </div>
        </div>
    ) : state.error !== '' ? (
        <p>{state.error}</p>
    ) : (
        state.fetchedBooks.map((data) => {
            return (
                <div className='card mb-2' key={data.id}>
                    <div className='card-header'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn btn-link collapsed'
                                data-toggle='collapse'
                                data-target={`#${data.id}`}
                                aria-expanded='false'>
                                    {data.volumeInfo.title}
                            </button>
                        </h5>
                    </div>
                    <div id={data.id} className='collapse' data-parent="#accordion">
                        <div className='card-body'>
                            {data.volumeInfo.hasOwnProperty('imageLinks') && <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title}/>}
                            <br />
                            <h4 className='card-title'>Title : {data.volumeInfo.title}</h4>
                            <h5 className='card-title'>Author : {data.volumeInfo.authors}</h5>
                            <p className='card-text'>Description : {data.volumeInfo.description}</p>
                            <button><a className="btn btn-outline-warning ml-6" href={data.volumeInfo.previewLink} alt="other infos of the book" target="_blank" rel="noopener noreferrer">Other infos</a></button>
                            <button className='btn btn-outline-secondary'>Save the book</button>
                        </div>
                    </div>
                </div>   
            )
        })
    )

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
                <div id='accordion'>
                    {displayFetchedBooks}
                </div>
            </div>
    </main>
  )
}

export default SearchBooks;