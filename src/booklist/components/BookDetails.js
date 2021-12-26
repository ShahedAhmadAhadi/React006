import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({book, id}) => {
    const {removeBook} = useContext(BookContext)
    return (
        <li onClick={() => removeBook(book.id)} key={id}>
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
        </li>
    )
}

export default BookDetails
