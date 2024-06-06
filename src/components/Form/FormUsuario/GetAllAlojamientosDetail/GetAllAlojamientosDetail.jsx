import { useEffect, useState } from 'react';

export const GetAllAlojamientosDetail = () => {
    const [alojamientos, setAlojamientos] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const obtenerAlojamientos = async () => {
        try {
            const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
            if (response.ok) {
                const data = await response.json();
                setAlojamientos(data);
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

    return { alojamientos, alertMessage, alertType, obtenerAlojamientos };
};
