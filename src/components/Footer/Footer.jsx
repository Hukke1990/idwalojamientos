import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='contenedorFooter'>
      <ul className='contenedorRedes'>
        <li><a href="/#"><i class="bi bi-facebook"></i>Facebook</a></li>
        <li><a href="/#"><i class="bi bi-instagram"></i>Instagram</a></li>
        <li><a href="/#"><i class="bi bi-twitter-x"></i>Twitter-X</a></li>
      </ul>
      <p>
        &copy; 2024 IDW Alojamientos. Todos los derechos reservados.
      </p>
    </div>
  )
}

export default Footer
