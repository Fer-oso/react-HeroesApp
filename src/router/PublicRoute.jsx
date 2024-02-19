import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({children}) => {

const { logged} = useContext(UserContext)

return (!logged) ? children: <Navigate to="/heroes"/>
}
