import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addBook } from "./bookSlice"
import './AddBook.css'

const AddBook = ({ onClose }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    price: '',
    category: '',
    description: ''
  });

  const handleAddBook = () => {
    setValues({ name: '', price: '', category: '', description: '' });
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

    dispatch(addBook({
      id: uuidv4(),
      name: values.name,
      price: values.price,
      category: values.category,
      description: values.description
    }));

    onClose();
  }

  return (
    <div className="fixed-container">
      <h2 className="">Add New Book</h2>
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Moby-Dick' }}
        required
      />
      <br />
      <TextField
        label="Price"
        value={values.price}
        onChange={(e) => setValues({ ...values, price: e.target.value })}
        inputProps={{ type: 'price', placeholder: '14.99' }}
        required
      />
      <br />
      <TextField
        label="Category"
        value={values.category}
        onChange={(e) => setValues({ ...values, category: e.target.value })}
        inputProps={{ type: 'category', placeholder: 'Classic Literature' }}
        required
      />
      <br />
      <TextField
        label="Description"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        inputProps={{ type: 'description', 
        placeholder: "Herman Melville's 1851 novel about Captain Ahab's whale pursuit." }}
      />
      <Button onClick={handleAddBook}>Submit</Button>
    </div>
  )
}

export default AddBook