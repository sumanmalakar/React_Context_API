import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
  const [movies, setMovies] = useState([
    {
      name: 'harry potter',
      price: '$10',
      id: 1
    },
    {
      name: 'Game of Thrones',
      price: '$12',
      id: 2
    },
    {
      name: 'Inception',
      price: '$30',
      id: 3
    },
    {
      name: 'Infinity War',
      price: '$40',
      id: 4
    }
  ]);
  return(
    <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MovieContext.Provider>
  );
}