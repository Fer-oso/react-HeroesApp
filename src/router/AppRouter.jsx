import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/auth/login/Login'
import { HeroesRouter } from '../pages/heroes/router/HeroesRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/heroes"/>}/>
        <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />

        <Route path="/*" element={<PrivateRoute> <HeroesRouter /> </PrivateRoute>} />
      </Routes>
    </>
  )
}
