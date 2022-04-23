import React from 'react'
import { postFavMovies } from '../../helpers/postFavMovies'
import { useFetchItems } from '../../hooks/useFetchItems'
import { MovieItem } from '../ui/MovieItem'
import './MoviesScreen.css'

export const FavMoviesScreen = () => {
  
    const ses = JSON.parse(localStorage.getItem('session_id'))
    const sesion_id  = ses.sesion_id
    const param = `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=b2e3a4cf7956b76b745797e1921c1ab5&session_id=${sesion_id}&language=en-US&sort_by=created_at.asc&page=1`
    const { loading, data } = useFetchItems(param)
  
    
    const handleButton = async (id, sesion_id, e) => {      
      const param = `https://api.themoviedb.org/3/account/{account_id}/favorite?session_id=${sesion_id}&api_key=b2e3a4cf7956b76b745797e1921c1ab5`
      const res = await postFavMovies(param, id, false)
      if(res.status === 200){
        window.location.reload(true)
      }
    }

    return (
      <>
        {loading ? <h1>Loading...</h1> : (data.length===0)? <h1 className="fav-movies-text">You don't have any movies added on favorite movies</h1> : 
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
                    onClick={(e) => handleButton(movie.id, sesion_id)}
                  >Remove movie of favorite</button>
              </div>
              
              
            ))}

          </div>
         
  
        }
      </>
    )

}