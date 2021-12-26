import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const BookLists = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}>the way of kings</li>
            </ul>
        </div>
    )
}

export default BookLists
