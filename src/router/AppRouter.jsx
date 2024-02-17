import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import { HeroesRouter } from '../pages/heroes/router/HeroesRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HeroesRouter/>}/>
      </Routes>
    </>
  )
}
