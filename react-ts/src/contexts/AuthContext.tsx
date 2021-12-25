import { createContext, ReactNode, useReducer } from "react";
import { authReducer, AuthState } from "../reducers/AuthReducer";
import { AuthActionType } from '../reducers/types';

interface AuthContextProps {
    children: ReactNode
}

interface AuthContextDefault {
    authInfo: AuthState,
    toggleAuth: (username: string) => void
}

const authDefault = {
    isAuthenticated: false,
    username: ''
}

const {TOGGLE_AUTH} = AuthActionType

export const AuthContext = createContext<AuthContextDefault>({
    authInfo: authDefault,
    toggleAuth: () => {}
})

const AuthContextProvider = ({children} : AuthContextProps) => {
    const [authInfo, dispatch] = useReducer(authReducer, authDefault)

    const toggleAuth = (username: string ) => dispatch({
        type: TOGGLE_AUTH, payload: username
    })

    const authContextData = {
        authInfo,toggleAuth
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider