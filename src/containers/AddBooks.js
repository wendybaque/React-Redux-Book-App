import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addBook, deleteBook} from '../redux/actions/actionAddBooks';
import FlipMove from 'react-flip-move';

function AddBooks({libraryData, addBook, deleteBook}) {

    const initialState = {
        title:'',
        author:''
    }

    const [newData, setNewData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(newData);
        //vide le input :
        setNewData(initialState);
    }

    // vérifie si on a qqch dans libraryData :
    const displayData = libraryData.length > 0 ? 
    <FlipMove>
        {
        libraryData.map((data) => {
        return (
            <li key={data.id}className='list-group-item list-group-item-light d-flex justify-content-between'>
                <span><strong>Title : </strong>{data.title}</span>
                <span><strong>Author : </strong>{data.author}</span>
                <button className='btn btn-danger' onClick={() => deleteBook(data.id)}>X</button>
            </li>)
    }) 
        }
    </FlipMove>
    : <p className='text-center'>Aucun livre à afficher</p>

    // n'affiche le bouton de suppression de tous les livres que s'il y a des livres dans le localstorage :
    const deleteAllBooksBtn = libraryData.length > 0 &&
    <div className='d-flex justify-content-center'>
        <button className='btn btn-danger mt-3 mb-3'>Remove all books</button>
    </div>

    return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid bg-light'>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>Add a book in your library.</p>

                <form className='form-inline justify-content-center' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Title' required value={newData.title} onChange={(e) => setNewData({...newData, title:e.target.value})}></input>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control mt-3' placeholder='Author' required value={newData.author} onChange={(e) => setNewData({...newData, author:e.target.value})}></input>
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
                        {displayData}
                    </ul>
                    {deleteAllBooksBtn}
                </div>
            </div>
        </div>

    </main>
  )
}

const mapStateToProps = (state) => {
    return {
        libraryData:state.library
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook:(param) => dispatch(addBook(param)),
        deleteBook: (id) => dispatch(deleteBook(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
