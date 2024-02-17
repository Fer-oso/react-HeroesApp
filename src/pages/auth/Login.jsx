import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

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
    <div className='form-group col-md-6'>
      <label className="col-form-label mt-4">
        Login
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="write username"
      />
      <button className='btn btn-primary' onClick={onLogin}>Login</button>
    </div>
  )
}
