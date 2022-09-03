import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addBook} from '../redux/actions/actionAddBooks';

function AddBooks({libraryData, addBook}) {

    console.log(libraryData)

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

const mapStateToProps = (state) => {
    return {
        libraryData:state.library
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook:(param) => dispatch(addBook(param))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
