import { useEffect, useState } from 'react';

export const ServiciosDetail = () => {
    const [servicios, setServicios] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const obtenerServicios = async () => {
        try {
            const response = await fetch('http://localhost:3001/servicio/getAllServicios');
            if (response.ok) {
                const data = await response.json();
                setServicios(data);
                setAlertMessage('Servicios obtenedios.');
                setAlertType('success');
            } else {
                console.error('Error al obtener los servicios');
                setAlertMessage('Error al obtener los servicios.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    }

    useEffect(() => {
        obtenerServicios();
    }, []);

    return { servicios, alertMessage, alertType, obtenerServicios };
};
