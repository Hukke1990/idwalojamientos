import React, { useState, useEffect } from 'react'
import alojamientoJson from '../../../Data/data.json'

export const AlojamientoDetail = () => {

  const [alojamiento, setAlojamiento] = useState({});

  console.log(alojamiento)

  useEffect(() => {
    const getAlojamiento = (alojamientoList) => new Promise((resolve, reject) => {

      setTimeout(() => {
        if (alojamientoList.lenght) {
          resolve(alojamientoList);
        } else {
          reject("No se encontraron alojamientos")
        };

      }, 2000);
    });

    getAlojamiento(alojamientoJson).
      then(res => setAlojamiento(res)).catch(err => console.log(`${err} No hay alojamientos`));


  }, [])

  return (
    <div>
      <p>aca va informacion del alojamiento</p>
      {alojamiento.lenght ? <p>Hay alojamientos</p> : <p>No hay alojamientos</p>}
    </div>
  )
}