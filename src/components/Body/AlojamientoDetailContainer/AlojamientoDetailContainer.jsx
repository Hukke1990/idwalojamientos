import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../Modal/ModalServicios';
import { NavLink } from 'react-router-dom';
import { TipoAlojamientoDetail } from '../../Form/TipoAlojamientoDetail/TipoAlojamientoDetail';
import './AlojamientoDetailContainer.css';

export const AlojamientoDetailContainer = () => {
    const [alojamiento, setAlojamiento] = useState(null);
    const [servicios, setServicios] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const { idAlojamiento } = useParams();
    const { tiposAlojamiento } = TipoAlojamientoDetail();

    const obtenerAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${idAlojamiento}`);
            if (response.ok) {
                const data = await response.json();
                setAlojamiento(data);
                console.log('Alojamiento data:', data);
            } else {
                console.error('Error al obtener el alojamiento:', response.statusText);
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    const obtenerServicios = async () => {
        try {
            const response = await fetch(`http://localhost:3001/alojamientosServicios/getAlojamientoServicio/${idAlojamiento}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Servicios data:', data);

                // Obtén los detalles completos de cada servicio
                const serviciosDetalles = await Promise.all(data.map(async (servicio) => {
                    const responseServicio = await fetch(`http://localhost:3001/servicio/getServicio/${servicio.idServicio}`);
                    if (responseServicio.ok) {
                        const servicioData = await responseServicio.json();
                        return { ...servicio, ...servicioData };
                    } else {
                        console.error('Error al obtener el detalle del servicio:', responseServicio.statusText);
                        return null;
                    }
                }));

                // Filtra los servicios que no se pudieron obtener
                setServicios(serviciosDetalles.filter(servicio => servicio !== null));
            } else {
                console.error('Error al obtener los servicios:', response.statusText);
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    const obtenerImagenes = async () => {
        try {
            const response = await fetch('http://localhost:3001/imagen/getAllImagenes');
            if (response.ok) {
                const data = await response.json();
                const imagenesFiltradas = data.filter(imagen => imagen.idAlojamiento === parseInt(idAlojamiento));
                setImagenes(imagenesFiltradas);
                console.log('Imagenes data:', imagenesFiltradas);
            } else {
                console.error('Error al obtener las imágenes:', response.statusText);
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    const getTipoAlojamientoDescripcion = (idTipoAlojamiento) => {
        const tipo = tiposAlojamiento.find(tipo => tipo.idTipoAlojamiento === idTipoAlojamiento);
        return tipo ? tipo.Descripcion : 'Desconocido';
    };

    useEffect(() => {
        obtenerAlojamiento();
        obtenerServicios();
        obtenerImagenes();
    }, [idAlojamiento]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <section>
            {alojamiento ? (
                <div className='contenedorDetailContainer'>
                    <div className='contenedorTituloDetail'>
                        <h2>{alojamiento.Titulo}</h2>
                        <p>{alojamiento.Descripcion}</p>
                    </div>
                    <h3>Conoce nuestro alojamiento</h3>
                    <div className="contenedorImages">
                        {imagenes && imagenes.map((imagen) => (
                            <img key={imagen.idImagen} src={imagen.RutaArchivo} alt={`Imagen ${imagen.idImagen}`} />
                        ))}
                    </div>
                    <h4>¿Qué ofrece este lugar?</h4>
                    <div className="contenedorDetalles">
                        <ul className='contenedorServicios'>
                            {servicios && servicios.length > 0 ? (
                                servicios.map((servicio) => (
                                    <li key={servicio.idServicio}>
                                        {servicio.Nombre}
                                    </li>
                                ))
                            ) : (
                                <p>No hay servicios disponibles para este alojamiento.</p>
                            )}
                        </ul>
                        <div className='masServicios'>
                            <button className="btn" onClick={openModal}>
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                + servicios
                            </button>
                            <Modal isOpen={modalOpen} onClose={closeModal} />
                        </div>
                    </div>
                    <div className="contenedorMasDetalles">
                        <div className="contenedorUbicacion">
                            <h4>Ubicación</h4>
                            <p><span>Latitud: </span>{alojamiento.Latitud}</p>
                            <p><span>Longitud: </span>{alojamiento.Longitud}</p>
                            <p>{alojamiento.Direccion}</p>
                        </div>
                        <div className='contenedorCaracteristicas'>
                            <h4>Características</h4>
                            <p><span>Tipo de alojamiento: </span>{getTipoAlojamientoDescripcion(alojamiento.idTipoAlojamiento)}</p>
                            <p><span>Descripción: </span>{alojamiento.Descripcion}</p>
                            <p><span>Precio por día: </span>{alojamiento.PrecioPorDia}</p>
                            <p><span>Cantidad de dormitorios: </span>{alojamiento.CantidadDormitorios}</p>
                            <p><span>Cantidad de baños: </span>{alojamiento.CantidadBanios}</p>
                            <p><span>Estado: </span>{alojamiento.Estado}</p>
                        </div>
                    </div>
                    <button className='btnVolver'>
                        <NavLink to="/" className='linkAdminAlojamiento'>Volver</NavLink>
                    </button>
                </div>
            ) : (
                <p className='cargandoCard'>Buscando ...</p>
            )}
        </section>
    );
};
