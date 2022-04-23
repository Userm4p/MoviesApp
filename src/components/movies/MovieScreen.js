import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMoviesById } from '../../helpers/getMoviesById';
import './MovieScreen.css'

export const MovieScreen = () => {

  const {Movieid} = useParams();
  const [state, setState] = useState({
    movie: {},
    reviews: [],
    loading: true
  });
  useEffect(() => {  
    getMoviesById(Movieid)
      .then(movies => {
        setState({
          movie: movies.moviedata,
          reviews: movies.reviews,
          loading: false
        });
      });
  }, [Movieid])
  
  const { movie, reviews, loading } = state;

  return (
    <>
      {(loading) ? <h1>Loading...</h1> : 
      <div>
        <div className="movie-details-container">
          <h1 className="movie-details-title">{movie.original_title}</h1>
          <h2 className="movie-details-subtitle">{movie.tagline}</h2>
          <div className="movie">
            <img className="movie-details-img" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie picture"/>
            <div className="movie-details-info">
              
              <h4 className="movieScore">Score: {movie.vote_average}</h4>
              <h4 className="movie-genres" >Genres: {movie.genres.map(genre => genre.name).join(', ')}</h4>
              <h4 className="movie-produccion">Production Companies: {movie.production_companies.map(company => company.name).join(', ')}</h4>
              <h3 className="movie-details-date" >{movie.release_date}</h3>
            </div> 
              
          </div>
          <p className="movie-details-description">{movie.overview}</p>
          <h4 ><a className="movie-homepage"  href={movie.homepage}>Homepage: {movie.homepage}</a></h4>
          
        </div>
        
        <div className="movie-reviews-container">
          {reviews.map(review => (
            <div className="review-container"
              key={review.autor}
            >
              <div className="review-profile">
                <img className="review-profil-picture" src={`https://image.tmdb.org/t/p/w500${review.autor_img}`} alt='profile picture' />
                <h3 className="review-profil-name">{review.autor}</h3>
              </div>
              <h6 className="review-content" >{review.content}</h6>              
            </div>
          ))}
        </div>
      </div>}
    </>
  )
}
