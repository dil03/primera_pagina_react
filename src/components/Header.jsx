import React from 'react'
import "./Header.css"
import speci from "./speci.jpg"
function Header() {
  return (
     <nav className='header'>
        <ul>
            <a  className='logo' href="#"><img src={speci} height={50} /></a>
            <a className="a_navee" href="#"><li>Home</li></a>
            <a className="a_navee" href="#"><li>Ruta</li></a>
            <a className="a_navee" href="#"><li>MTB</li></a>
            <a className="a_navee" href="#"><li>Cascos</li></a>
            <a className="a_navee" href="#"><li>Zapatos</li></a>
        </ul>
    </nav>
       

  )
}

export default Header