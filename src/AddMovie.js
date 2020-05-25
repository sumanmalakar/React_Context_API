import React, {useState, useContext} from 'react'
import {MovieContext } from './MovieContext'

const  AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);



  const UpdateName = (e) =>{
    setName(e.target.value)
  }

  const UpdatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = e =>{
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name:name, price:price}])
    setName('');
    setPrice('');
  }


  return (
    <div className="form">
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={UpdateName} />
        <input type="text" name="price" value={price} onChange={UpdatePrice} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie
