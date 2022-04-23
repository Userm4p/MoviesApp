import React from 'react'
import { postFavMovies } from '../../helpers/postFavMovies'
import { useFetchItems } from '../../hooks/useFetchItems'
import { MovieItem } from '../ui/MovieItem'
import './MoviesScreen.css'

export const PopularMoviesScreen = () => {
  const param = 'https://api.themoviedb.org/3/movie/popular?api_key=b2e3a4cf7956b76b745797e1921c1ab5&language=en-US&page=1'
  const { loading, data } = useFetchItems(param)
  const ses = JSON.parse(localStorage.getItem('session_id'))
  const sesion_id  = ses.sesion_id

  const handleButton = (id, sesion_id) => {      
    const param = `https://api.themoviedb.org/3/account/{account_id}/favorite?session_id=${sesion_id}&api_key=b2e3a4cf7956b76b745797e1921c1ab5`
    postFavMovies(param, id, true)
  }

  return (
    <>
      {loading ? <h1>Loading...</h1> : 
      <div className="movies-container">
        {data.map(movie => (
          <div
            className="movie-container" 
            key={movie.id}
          >
          <MovieItem 
            {...movie}
            />
            <button
              className="movie-button-fav"
              onClick={() => handleButton(movie.id, sesion_id)}
            >Add movie to favorites </button>
        </div>
       ))}
      </div>
      }
    </>
  )
}
