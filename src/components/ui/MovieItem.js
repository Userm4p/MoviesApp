import React from 'react'
import { Link } from 'react-router-dom'

import './MovieItem.css'

export const MovieItem = ({title,thumbnail,language,overview, id}) => {
  return (
    <>
        <div className="movie-container">
            
            <img className="movie-image" src={thumbnail} alt='movie-poster'/>
            <h1 className="movie-title">{title}</h1>
            <h6 className="movie-description">{overview}</h6>
            <Link 
            className="movie-link"
            to={`/Movies/${id}`}>
                          More .   .  .   
            </Link>
        </div>
    </>
  )
}
