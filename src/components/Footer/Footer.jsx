import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='contenedorFooter'>
      <ul className='contenedorRedes'>
        <li><a className='quesi-queno-1 facebook' href="/#"><i class="bi bi-facebook"></i>Facebook</a></li>
        <li><a className='quesi-queno-3 instagram' href="/#"><i class="bi bi-instagram"></i>Instagram</a></li>
        <li><a className='quesi-queno-2 twitter-x' href="/#"><i class="bi bi-twitter-x"></i>Twitter-X</a></li>
      </ul>
      <p>
        &copy; 2024 IDW Alojamientos. Todos los derechos reservados.
      </p>
    </div>
  )
}

export default Footer
