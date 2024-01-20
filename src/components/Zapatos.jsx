import React from 'react'
import "./Zapatos.css"
function Zapatos() {
    const Zapatos = [
        {img:"zapatillaruta.png",marca:"S-Works 7 Road white",precio:"410$"},
        {img:"zapatillamount.png",marca:" S-Works 7 Road black",precio:"370$"},
        {img:"zapatillamount2.png",marca:" S-Works 7 Recon",precio:"365$"}
    ]
  return (
    <div className='zapatoSworks'>
        {Zapatos.map((zapatos, index) => (
          <div className='columna_zapato' key={index}>
            <a href="#"><img className="imagen_zapato" src={require(`../imagenes/${zapatos.img}`)} alt={zapatos.img} /></a>
            <h3 className='h3_zapatoswo'>{zapatos.marca}</h3>
            <h3 className='h3_zapato'>{zapatos.precio}</h3>
            
          </div>
        ))}
    </div>
  )
}

export default Zapatos