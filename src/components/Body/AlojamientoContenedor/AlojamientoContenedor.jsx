import React, { useState, useEffect } from 'react'
import { AlojamientoList } from '../AlojamientoList/AlojamientoList'
import alojamientoJson from '../../../Data/data.json'

export const AlojamientoContenedor = () => {

  const [alojamiento, setAlojamiento] = useState([]);

  useEffect(() => {
    const getAlojamiento = (alojamientoList) => new Promise((resolve, reject) => {
      setTimeout(() => {
        if (alojamientoList.length) {
          resolve(alojamientoList);
        } else {
          reject("No se encontraron alojamientos")
        }

      }, 2000);
    });
    getAlojamiento(alojamientoJson).
      then(res => setAlojamiento(res)).catch(err => console.log(`${err} No hay alojamientos`));
  }, [])

  console.log(alojamiento, "componenete contenedor")
  return (
    <>
      {alojamiento.length ? <AlojamientoList alojamientoInfo={alojamiento} /> : <p>cargando...</p>}
    </>
  )
}