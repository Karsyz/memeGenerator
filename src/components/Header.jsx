import React from "react"
import '../App.css'
import trollFace from '../assets/images/troll-face.png'

export default function Header() {
  return (
    <nav className="header">
        <img src={trollFace} alt="Troll Face" className="header--image" />
        <h1>Meme Generator</h1>
      <h3>React Course - Project 3</h3>
    </nav>
  )
}