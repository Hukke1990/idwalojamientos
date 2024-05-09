import React from 'react'

export const ItemCard = () => {
  return (
    <figure>
      <img src="images/Alojamientos/02_exterior.webp" alt="casa colonial" height={200} width={300} />
      {/* Estos datos deben ser tomados de data.json */}
      <h3>Entre Rios, Argentina</h3>
      <p>Ubicacion del alojamiento</p>
      <p>disponibilidad</p>
      <p>$150.000</p>
-    </figure>
  )
}
