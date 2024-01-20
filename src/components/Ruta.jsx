import React from 'react'
import "./Ruta.css"

function Ruta() {
  const rutaBikes = [
    { img: "sl8nu.png", marca: "Specialized SL8", precio: "30,000$" },
    { img: "specsl7pro.png", marca: "Specialized SL7 pro", precio: "25,700$" },
    { img: "specsl6disccomp.png", marca: "Specialized SL6 disc", precio: "21,100$" },
    { img: "specsl6discexpert.png", marca: "Specialized SL6 disc expert", precio: "22,900$" },
    { img: "specrou.png", marca: "Specialized Roubaix", precio: "19.400$" },
    { img: "specallexelite.png", marca: "Specialized Allez Elite", precio: "17.200$" },
    
  ];
  return (
    <div className='part_ruta'>
      {rutaBikes.map((bike,index)=>(
        <div className='container' key={index}>
        <a href="#"><img className="imagen_rut" src={require(`../imagenes/${bike.img}`)} alt={bike.img} /></a>
        <h3 className='h3_r'>{bike.marca}</h3>
        <h3 className='h3_ru'>{bike.precio}</h3>
      </div>
      ))};
        
    </div>
  )
}

export default Ruta