import { ThemeContext } from '../context/ThemeContext'
import React, { Component } from 'react'

export class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() {
        const { toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme}>toggle</button>
        )
    }
}

export default ThemeToggle
