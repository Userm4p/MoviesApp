import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { FavMoviesScreen } from '../components/movies/FavMoviesScreen'
import { MovieScreen } from '../components/movies/MovieScreen'
import { PopularMoviesScreen } from '../components/movies/PopularMoviesScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>

        <Navbar/>

        <div className="container">
        <Routes>
              <Route path="/Login" element={<LoginScreen/>} />
              <Route path="/Movies" element={<PopularMoviesScreen/>} />
              <Route path="/FavMovies" element={<FavMoviesScreen/>} />
              <Route path="/Movies/:Movieid" element = {<MovieScreen/>} />
              <Route path="/*" element={ <PopularMoviesScreen/> } />
          </Routes>
        </div>

        

    </>
  )
}
