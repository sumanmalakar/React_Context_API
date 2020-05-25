import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

function Nav() {
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <div className="nav"> 
      <p>Suman</p>
      <p>List of Movie: {movies.length} </p>
    </div>
  )
}

export default Nav
