import React from 'react'
import "./Mountain.css"

function Mountain() {
   const mountainBikes = [
      { img: "epic2023.png", marca: "Epic 2023", precio: "20.000$" },
      { img: "epic2022.png", marca: "Epic 2022", precio: "18.400$" },
      { img: "epic2021.png", marca: "Epic 2021", precio: "16.000$" },
      { img: "epicexpert.png", marca: "Epic Expert", precio: "15.200$" },
      { img: "epicevoexpert.png", marca: "Epic Evo Expert", precio: "12.900$" },
      { img: "epicaxs.png", marca: "Epic AXS", precio: "11.800$" },
      
    ];
  
    return (
      <div className='mountain'>
        {mountainBikes.map((bike, index) => (
          <div className='columna_abajo' key={index}>
            <a href="#"><img className="imagen_moun" src={require(`../imagenes/${bike.img}`)} alt={bike.img} /></a>
            <h3 className='h3_mou'>{bike.marca}</h3>
            <h3 className='h3_mount'>{bike.precio}</h3>
          </div>
        ))}
      </div>
    );
   
}

export default Mountain
