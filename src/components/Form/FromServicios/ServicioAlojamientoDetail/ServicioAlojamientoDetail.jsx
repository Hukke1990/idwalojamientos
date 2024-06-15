import { useEffect, useState } from 'react';

export const TipoAlojamientoDetail = () => {
    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const obtenerTiposAlojamiento = async () => {
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (response.ok) {
                const data = await response.json();
                setTiposAlojamiento(data);
                setAlertMessage('Tipos de Alojamiento obtenidos.');
                setAlertType('success');
            } else {
                console.error('Error al obtener los tipos de alojamiento');
                setAlertMessage('Error al obtener los tipos de alojamiento.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    };

    useEffect(() => {
        obtenerTiposAlojamiento();
    }, []);

    return { tiposAlojamiento, alertMessage, alertType, obtenerTiposAlojamiento };
};
