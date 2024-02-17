import { useReducer } from "react"
import { UserContext } from "./UserContext"
import { authReducer } from "./authReducer"
import { types } from "./types/types"
import { json } from "react-router-dom"

/*EL PROVIDER ES EL QUE SE ENCARGA DE PROVEER EL STATE INICIAL Y LOS DISTINTOS FUNCIONES A MI APLICACION*/ 

const init = () =>{

    const authUser = JSON.parse(localStorage.getItem('authUser'));

    return {
        logged: !!authUser,
        authUser
    }
}

export const UserProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {},init);

    const login = (username) => {

        const authUser = {id:1,username}

        const action = {
            type: types.login,
            payload: authUser
        }

        localStorage.setItem('authUser', JSON.stringify(authUser))

        dispatch(action);
    }

    const logout = () => {
        const action = {
            type: types.logout,
            payload: {}
        }
        localStorage.clear('authUser')
        dispatch(action)
    }

    return (
        <UserContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}
