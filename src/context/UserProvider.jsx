import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    const user ={
        id:1,
        name: 'Fernando'
    }

    return (
        <UserContext.Provider value={{hola:'mundo', user: user}}>
            {children}
        </UserContext.Provider>
    )
}
