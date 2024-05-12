import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import alojamientoJson from '../../../Data/data.json'
import './AlojamientoDetailContainer.css'

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
            {alojamiento ? ( // Verificar si alojamiento está definido y no es nulo
                <div className='contenedorDetailContainer'>
                    <div className='contenedorTituloDetail'>
                        <h2>{alojamiento.titulo}</h2>
                        <p>{alojamiento.descripcion}</p>
                    </div>
                    <h3>Conoce nuestro alojameinto</h3>
                    <div className="contenedorImages">
                        {alojamiento.imagenes.map((imagen) => (
                            <img key={imagen.idImagen} src={imagen.img} alt={imagen.idImagen} />
                        ))}
                    </div>
                    <div className="contenedorDetalles">
                        <h3>mas detalles sobre nuestro alojamiento</h3>
                        <h4>¿Qué ofrece este lugar?</h4>
                        <ul>
                            {alojamiento.servicios.map((servicio) => (
                                <li key={servicio.idServicio}>
                                    <img src={servicio.icono} alt={servicio.nombre} />
                                    {servicio.nombre}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p className='cargandoCard'>Buscando ...</p>
            )}
        </section>
    );
};


