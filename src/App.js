import React from 'react';
import Movilist from './Movilist'
import Nav from './Nav'
import './App.css'
import Addmovie from  './AddMovie'

import {MovieProvider} from './MovieContext'

const App = () =>{
  
  return (
   <MovieProvider>
   <div className="App">
    <Nav />
    <Addmovie />
    <Movilist />
   </div>
    </MovieProvider>
  );

}
export default App;
