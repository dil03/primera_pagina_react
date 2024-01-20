import React from 'react'
import "./App.css"
import Header from './components/Header'
import sl8 from ".//imagenes/sl8.jpg"
import Ruta from './components/Ruta'
import Videoepic from './components/Videoepic'
import Mountain from './components/Mountain'
import casco from ".//imagenes/casco.png"
import Casco from './components/Casco'
import zapatilla from ".//imagenes/zapatilla.png"
import Zapatos from './components/Zapatos'
import Footer from './components/Footer'

function App() {
  return (
    <div className='titul_spci'>
      <Header/>
      
      <img className='img_' src={sl8} style={{ maxWidth: '100%', height: 'auto' }}/>

      <h2 className='titul'>Una bicicleta esta esperando a por ti</h2>
      <Ruta/>
      
      <Videoepic/>
      <h2 className='mount'>Mountain Bikes </h2>
      <Mountain />

      <img className='cas' src={casco} style={{maxWidth:"100%", height: "auto"}}/>
      <p className='titul_casc'>El casco S-Works Prevail 3 es perfecto para los ciclistas que valoran la comodidad y los beneficios de la termorregulación que ofrece una ventilación superior. Es el casco definitivo que destaca en condiciones de calor, subidas extenuantes y etapas montañosas</p>
      <Casco/>

      <img className='zapatos' src={zapatilla} style={{maxWidth:"100%", height:"auto"}}/>
      <Zapatos/>
      <Footer/>
    </div>
  )
}

export default App
