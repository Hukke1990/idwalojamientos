import { useEffect, useState } from 'react';

export const GetAllAlojamientosDetail = ({ render }) => {
    const [alojamientos, setAlojamientos] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const obtenerAlojamientos = async () => {
        try {
            const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
            if (response.ok) {
                const data = await response.json();

                // Obtener servicios para cada alojamiento
                const alojamientosConServicios = await Promise.all(data.map(async alojamiento => {
                    try {
                        const serviciosResponse = await fetch(`http://localhost:3001/alojamientosServicios/getAlojamientoServicio/${alojamiento.idAlojamiento}`);
                        if (serviciosResponse.ok) {
                            const servicios = await serviciosResponse.json();
                            const serviciosDetalles = await Promise.all(
                                servicios.map(async servicio => {
                                    const servicioResponse = await fetch(`http://localhost:3001/servicio/getServicio/${servicio.idServicio}`);
                                    if (servicioResponse.ok) {
                                        return await servicioResponse.json();
                                    } else {
                                        console.error('Error al obtener el detalle del servicio:', servicioResponse.statusText);
                                        return null;
                                    }
                                })
                            );
                            return { ...alojamiento, servicios: serviciosDetalles.filter(servicio => servicio !== null) };
                        } else {
                            console.error('Error al obtener los servicios:', serviciosResponse.statusText);
                            return { ...alojamiento, servicios: [] };
                        }
                    } catch (error) {
                        console.error('Error al obtener los servicios:', error);
                        return { ...alojamiento, servicios: [] };
                    }
                }));

                setAlojamientos(alojamientosConServicios);
                setAlertMessage('Alojamientos obtenidos.');
                setAlertType('success');
            } else {
                console.error('Error al obtener los alojamientos');
                setAlertMessage('Error al obtener los alojamientos.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    };

    useEffect(() => {
        obtenerAlojamientos();
    }, []);

    return render ? render({ alojamientos, alertMessage, alertType }) : null;
};
