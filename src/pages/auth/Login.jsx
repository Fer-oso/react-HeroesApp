import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const Login = () => {

  const {user} = useContext(UserContext);

  console.log(user)

  return (
   <>
   
    
   </>
  )
}
