import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggler = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>toggle</button>
    )
}

export default ThemeToggler
