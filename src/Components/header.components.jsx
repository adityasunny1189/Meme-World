import React from 'react'
import './header.css'
import meme from './mememaker.png'

const Header = () => {
    return (
        <div className = "header">
            <img 
                className = "logo"
                src={meme} 
                alt="Problem?"
            />
            <img className = "main-image" alt = "meme-generator" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAhTaWUyZKb2dUDDFRENJzbeehWZrA4GutYOtK3o4Vdaj-uGEW&usqp=CAU" />
        </div>
    )
}

export default Header;
