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
                    <h4>¿Qué ofrece este lugar?</h4>
                    <div className="contenedorDetalles">
                        <ul className='contenedorServicios'>
                            {alojamiento.servicios.map((servicio) => (
                                <li key={servicio.idServicio}>
                                    <i className={servicio.icono}></i>
                                    {servicio.nombre}
                                </li>
                            ))}
                        </ul>
                        <div className='masServicios'>
                            <button class="btn">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                + servicios
                            </button>
                        </div>
                    </div>
                    <div className="contenedorMasDetalles">
                        <div className="contenedorUbicacion">
                            <h4>Ubicación</h4>
                            <p><span>Latitud: </span>{alojamiento.ubicacion.latitud}</p>
                            <p><span>Longitud: </span>{alojamiento.ubicacion.longitud}</p>
                            <p>{alojamiento.ubicacion.direccion}</p>
                        </div>
                        <div className='contenedorCaracteristicas'>
                            <h4>Características</h4>
                            <p><span>Tipo de alojamiento: </span>{alojamiento.tipoAlojamiento.descripcion}</p>
                            <p><span>Descripción: </span>{alojamiento.descripcion}</p>
                            <p><span>Precio por dia: </span>{alojamiento.precioDia}</p>
                            <p><span>Cantidad de dormitorios: </span>{alojamiento.cantidadDormitorios}</p>
                            <p><span>Cantidad de banios: </span>{alojamiento.cantidadBanios}</p>
                            <p><span>Estado: </span>{alojamiento.estado}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='cargandoCard'>Buscando ...</p>
            )}
        </section>
    );
};


