import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import './Navbar.css';

export const Navbar = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        const action = {
            type: types.logout,
          }
    
          dispatch(action);
    
        navigate('/login', {
            replace: true
          })
    }


    return (
        <nav className="navbar-container">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Movies APP
            </Link>

            <div className="navbar">
                <div className="navbar-items">

                    <NavLink 
                        className='navbar-item' 
                        to="/Movies"
                    >
                        Popular Movies
                    </NavLink>

                    <NavLink 
                        className="navbar-item" 
                        to="/FavMovies"
                    >
                        Favorite Movies
                    </NavLink>
                    <div>
                        <ul>
                            <button
                                className="navbar-button" 
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

 