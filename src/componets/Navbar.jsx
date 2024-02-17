import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export const Navbar = () => {

  const navigate = useNavigate();

  const {logout, authUser} = useContext(UserContext);

  const onLogout = () => {

    logout()

    navigate('/login',{
      replace: true
    })
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/heroes">
          Heroes
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link " to="/heroes">
                Home
                <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <span className='nav-item mt-2'>{authUser?.username}</span>
          <button 
              className="nav-item nav-link"
              onClick={onLogout}>
              Logout
          </button>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}
