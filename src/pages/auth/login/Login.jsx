import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import { useNavigate } from 'react-router-dom'

import './Login.css'

export const Login = () => {

  const navigate = useNavigate();

  const { login } = useContext(UserContext)

  const onLogin = () => {

    login('Fernando Osorio');

    navigate('/heroes', {
      replace: true
    });
  }

  return (
   <div className='login-body'>
     <div className='wrapper'>
      <form>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <i class='bx bxs-user'></i>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <i class='bx bxs-lock-alt'></i>
        </div>

        <div className='remember-forgot'>
          <label>
            <input type='checkbox' />Remember me
          </label>
          <a href='#'>Forgot password?</a>
        </div>
        <button  onClick={onLogin}type='submit' className='btn btn-primary'>Login</button>
        <div className='register-link '>
          <p>Don't have an account?  <a href='#'>Regiser</a></p>
        </div>
      </form>
    </div>
   </div>
  )
}
