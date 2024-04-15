import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editBook } from "./bookSlice"
import './AddBook.css'

const EditBook = ({ bookId, onClose }) => {
  //const params = useParams();
  const dispatch = useDispatch();
  const books = useSelector(store => store.books);
  const existingBook = books.filter(book => book.id === bookId);
  const { name, price, category, description } = existingBook[0];
  const [values, setValues] = useState({
    name,
    price,
    category,
    description
  });

  const handleEditBook = () => {
    setValues({ name: '', price: 0, category: '', description: '' });
    if (!values.name) {
      alert("Name is required!"); // Display error message if name is empty
      return;
    }

    if (!values.price) {
      alert("Price is required!"); // Display error message if price is empty
      return;
    }

    if (isNaN(parseFloat(values.price))) {
      alert("Price must be a number!");
      return;
    }
    dispatch(editBook({
      id: bookId,
      name: values.name,
      price: values.price,
      category: values.category,
      description: values.description
    }));
    onClose();
  }

  return (
    <div className="fixed-container">
    <h2 className="text-lg font-semibold mb-4">Edit Book</h2>
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: '' }}
        required
      />
      <br />
      <TextField
        label="Price"
        value={values.price}
        onChange={(e) => setValues({ ...values, price: e.target.value })}
        inputProps={{ type: 'price', placeholder: '0' }}
        required
      />
      <br />
      <TextField
        label="Category"
        value={values.category}
        onChange={(e) => setValues({ ...values, category: e.target.value })}
        inputProps={{ type: 'category', placeholder: '' }}
        required
      />
      <br />
      <TextField
        label="Description"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        inputProps={{ type: 'description', placeholder: '' }}
      />
      <Button onClick={handleEditBook}>Edit</Button>
    </div>
  )
}

export default EditBook