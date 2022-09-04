import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants";

// Ajouter un livre
export const addBook = (data) => {
    return {
    type:'ADD_BOOKS', 
    payload:data
    }
}

// Supprimer un livre
export const deleteBook = (id) => {
    return {
        type:'DELETE_BOOK',
        payload:id
    }
}

// Supprimer tous les livres
export const deleteAllBooks = (id) => {
    return {
        type:'DELETE_ALL_BOOKS'
    }
}