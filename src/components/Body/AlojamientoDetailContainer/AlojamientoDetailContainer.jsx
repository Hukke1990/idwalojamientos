import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../Modal/ModalServicios';
import { NavLink } from 'react-router-dom';
import { TipoAlojamientoDetail } from '../../Form/TipoAlojamientoDetail/TipoAlojamientoDetail';
import './AlojamientoDetailContainer.css';

export const AlojamientoDetailContainer = () => {
    const [alojamiento, setAlojamiento] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const { idAlojamiento } = useParams();
    const { tiposAlojamiento } = TipoAlojamientoDetail();

    const obtenerAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${idAlojamiento}`);
            if (response.ok) {
                const data = await response.json();
                setAlojamiento(data);
            } else {
                console.error('Error al obtener el alojamiento:', response.statusText);
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
                    <h3>Conoce nuestro alojameinto</h3>
                    <div className="contenedorImages">
                        {alojamiento.imagenes && alojamiento.imagenes.map((imagen) => (
                            <img key={imagen.idImagen} src={imagen.img} alt={imagen.idImagen} />
                        ))}
                    </div>
                    <h4>¿Qué ofrece este lugar?</h4>
                    <div className="contenedorDetalles">
                        <ul className='contenedorServicios'>
                            {alojamiento.servicios && alojamiento.servicios.map((servicio) => (
                                <li key={servicio.idServicio}>
                                    <i className={servicio.icono}></i>
                                    {servicio.nombre}
                                </li>
                            ))}
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
                            <p><span>Precio por dia: </span>{alojamiento.PrecioPorDia}</p>
                            <p><span>Cantidad de dormitorios: </span>{alojamiento.CantidadDormitorios}</p>
                            <p><span>Cantidad de banios: </span>{alojamiento.CantidadBanios}</p>
                            <p><span>Estado: </span>{alojamiento.Estado}</p>
                        </div>
                        <button className='btnVolver'>
                            <NavLink to="/" className='linkAdminAlojamiento'>Volver</NavLink>
                        </button>
                    </div>
                </div>
            ) : (
                <p className='cargandoCard'>Buscando ...</p>
            )}

        </section>
    );
};
