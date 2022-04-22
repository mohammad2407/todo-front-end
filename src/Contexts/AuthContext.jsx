import React,{createContext,useState} from 'react'
export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [token,setToken] = useState('');
    const [isAuth, setIsAuth] = useState(false);

    const login = (token) =>{
        setToken(token)
        setIsAuth(true)
    }

    return (
        <AuthContext.Provider value =
            {
                {

                    isAuth,
                    login,
                    token,
                }
            }>
            {children}
        </AuthContext.Provider>
    )
    
}