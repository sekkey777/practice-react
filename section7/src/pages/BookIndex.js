import { Link } from 'react-router-dom'

import { getBooks } from '../functions/book'

const BookIndex = () => {
  const books = getBooks()
  return (<>
    <ul>
      {books.map( (book) => (
        <li key={book.id}><Link to={`/book-list/${book.id}`}>{book.title}</Link></li>
      ))}
    </ul>
  </>)
}

export default BookIndex