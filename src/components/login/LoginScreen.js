import React, { useContext, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './LoginScreen.css';
import {postUser} from '../../helpers/postUser.js'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { postSesionId } from '../../helpers/postSesionId';

export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

  const [resp, setResp] = useState();
  const [Values, handleInputChange, reset] = useForm({
    username: '',
    password: ''
  });
  const {username,password} = Values;


  const handleLogin = async (e) => {
    e.preventDefault();
    reset();
    const resp = await postUser(username,password);
    setResp(resp);

    if(resp.success){
      const sesion_id = await postSesionId({     
          request_token: resp.request_token
      })
      if(sesion_id){
        const action = {
          type: types.login,
          payload: {sesion_id: sesion_id}
        }
        dispatch(action);
        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath, {
          replace: true
        })
      } 
    }
    
    
  }



  return (
    <div className="login-container">
      <div className="login-box animate__animated animate__fadeIn">
          <h1 className="login-text">Login</h1>
          <form className="login-form"
              onSubmit={handleLogin}
          >
            
            <input
            className='auth__input'
            placeholder="Username"
            name="username"
            autoComplete="off"
            value={username}
            onChange={handleInputChange}
            type="text"
            >
            </input>
            
            <input
            className='auth__input'
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
            type="password"
            ></input>
             <button
            className="login-button"
            type="submit"
            >
            Login
          </button>
          
          </form>
          <a href='https://www.themoviedb.org/signup'>
          <h5 className='register-button'>Sing up</h5>
          </a>
          {resp && <div className="login-response">{resp.status_message}</div>}

      </div>
       

    </div>
    
  )
}
