import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import alojamientoJson from '../../../Data/data.json'
import { AlojamientoList } from '../AlojamientoList/AlojamientoList'

export const AlojamientoDetailContainer = () => {
    const [alojamiento, setAlojamiento] = useState(null);
    const { idAlojamiento } = useParams();

    useEffect(() => {
        const getAlojamiento = (alojamientoList) => new Promise((resolve, reject) => {
            setTimeout(() => {
                if (alojamientoList.length) {
                    resolve(alojamientoList.find((alojamiento) => alojamiento.idAlojamiento === idAlojamiento));
                } else {
                    reject("No se encontraron alojamientos")
                }
            }, 2000);
        });

        getAlojamiento(alojamientoJson)
            .then((res) => setAlojamiento(res))
            .catch((err) => console.log(`${err} No hay alojamientos`));

    }, [idAlojamiento]) //agrega idAlojamiento como dependencia para que cada vez que se actulice el ID de alojamiento cambie el useEffect


    return (
        <section>
            <h1>Detalle de alojamiento</h1>
            {alojamiento ? ( // Verificar si alojamiento está definido y no es nulo
                <div>
                    <h2>{alojamiento.titulo}</h2>
                    <p>{alojamiento.descripcion}</p>
                </div>
            ) : (
                <p className='cargando'>Buscando ...</p>
            )}
        </section>
    );
};


