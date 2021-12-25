import React, { Component, createContext } from 'react'

export const AuthContext = createContext();

export class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    toggleAuth = () => {
        this.state({isAuthenticated: !this.state.isAuthenticated})
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContext
