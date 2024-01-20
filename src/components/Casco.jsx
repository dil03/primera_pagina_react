import React from 'react'
import "./Casco.css"
function Casco() {
    const Cascos = [
        {img:"cascoevade3.png",marca:"Evade 3",precio:"250$"},
        {img:"prevail3.png",marca:"Prevail 3",precio:"220$"},
        {img:"propero3.png",marca:"propero III",precio:"180$"}
    ];

  return (
    <div className='CascoSworks'>
        {Cascos.map((cascos, index) => (
          <div className='columna' key={index}>
            <a href="#"><img className="imagen_casc" src={require(`../imagenes/${cascos.img}`)} alt={cascos.img} /></a>
            <h3 className='h3_casc'>{cascos.marca}</h3>
            <h3 className='h3_cas'>{cascos.precio}</h3>
          </div>
        ))}
    </div>
  )
}

export default Casco