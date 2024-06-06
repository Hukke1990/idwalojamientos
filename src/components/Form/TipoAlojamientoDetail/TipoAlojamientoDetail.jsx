import { useEffect, useState } from 'react';

export const TipoAlojamientoDetail = () => {
    const [alojamientos, setAlojamientos] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const obtenerTipoAlojamientos = async () => {
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (response.ok) {
                const data = await response.json();
                setAlojamientos(data);
                setAlertMessage('Tipo de Alojamiento obtenedios.');
                setAlertType('success');
            } else {
                console.error('Error al obtener los tipos de alojamientos');
                setAlertMessage('Error al obtener los tipos de alojamientos.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    }

    useEffect(() => {
        obtenerTipoAlojamientos();
    }, []);

    return { alojamientos, alertMessage, alertType, obtenerTipoAlojamientos };
};
