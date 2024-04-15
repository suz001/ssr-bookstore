import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { deleteBook } from "./bookSlice";
import Popup from 'reactjs-popup';
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import './BookList.css'

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(store => store.books);

  const handleRemoveBook = (id) => {
    dispatch(deleteBook({ id }));
  }
 
  const renderCard = () => books.map(book => (
    <Popup
    overlayStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
      trigger={ 
        <div className="book-card" key={book.id}>
        <div className="book-details">
          <h3 className="book-title">{book.name}</h3>
          <span className="book-info">${book.price}</span>
          <span className="book-info">{book.category}</span>
        </div>

      <div className="book-actions">
 
        
        <button
          onClick={() => handleRemoveBook(book.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
} modal nested>
  {
       (close) => (
        <div class="popup-container">
          
          <EditBook bookId={book.id} onClose={close} variant="gradient"/>
        </div>
      )
      }
    </Popup>
  ))

  return (
    <div>
      <Popup overlayStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
      trigger ={<Button>Add Book</Button>} modal nested>
      {
       (close) => (
        <div className="popup-container">
          <button className="close-button absolute top-0 right-0 mt-2 mr-2 text-gray-700 hover:text-gray-900" onClick={close}>
            &times;
          </button>
          <AddBook onClose={close} variant="gradient"/>
        </div>
      )
      }
      </Popup>
      <div className="no-book">
        {books.length ? renderCard() : <p>No Book</p>}
      </div>
    </div>
  )
}

export default BookList