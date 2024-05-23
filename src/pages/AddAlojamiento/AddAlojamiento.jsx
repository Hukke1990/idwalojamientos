import React, { useState } from 'react';
import './AddAlojamiento.css';

export function AddAlojamiento() {
    // Declaración de estados para cada campo del formulario
    const [idAlojamiento, setIdAlojamiento] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipoAlojamiento, setTipoAlojamiento] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [precioDia, setPrecioDia] = useState('');
    const [cantidadDormitorios, setCantidadDormitorios] = useState('');
    const [cantidadBanios, setCantidadBanios] = useState('');
    const [estado, setEstado] = useState('');
    const [imagenCover, setImagenCover] = useState('');
    const [imagenCoverPreview, setImagenCoverPreview] = useState('');
    const [imagenes, setImagenes] = useState([]);
    const [imagenesPreview, setImagenesPreview] = useState([]);
    const [servicios, setServicios] = useState('');

    // Estado para almacenar los datos ingresados
    const [alojamientos, setAlojamientos] = useState([]);
    const [errors, setErrors] = useState({});

    const handleImagenCoverChange = (e) => {
        const file = e.target.files[0];
        setImagenCover(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagenCoverPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleImagenesChange = (e) => {
        const files = Array.from(e.target.files);
        setImagenes(files);

        const previews = [];
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                previews.push(reader.result);
                if (previews.length === files.length) {
                    setImagenesPreview(previews);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!idAlojamiento) newErrors.idAlojamiento = 'ID es requerido';
        if (!titulo) newErrors.titulo = 'Título es requerido';
        if (!descripcion) newErrors.descripcion = 'Descripción es requerida';
        if (!tipoAlojamiento) newErrors.tipoAlojamiento = 'Tipo de alojamiento es requerido';
        if (!ubicacion) newErrors.ubicacion = 'Ubicación es requerida';
        if (!precioDia) newErrors.precioDia = 'Precio por día es requerido';
        if (!cantidadDormitorios) newErrors.cantidadDormitorios = 'Cantidad de dormitorios es requerida';
        if (!cantidadBanios) newErrors.cantidadBanios = 'Cantidad de baños es requerida';
        if (!estado) newErrors.estado = 'Estado es requerido';
        if (!imagenCover) newErrors.imagenCover = 'Imagen de portada es requerida';
        if (!servicios) newErrors.servicios = 'Servicios son requeridos';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Crear un nuevo alojamiento con los datos del formulario
        const nuevoAlojamiento = {
            idAlojamiento,
            titulo,
            descripcion,
            tipoAlojamiento,
            ubicacion,
            precioDia,
            cantidadDormitorios,
            cantidadBanios,
            estado,
            imagenCover: imagenCoverPreview,
            imagenes: imagenesPreview,
            servicios,
        };

        // Agregar el nuevo alojamiento a la lista de alojamientos
        setAlojamientos([...alojamientos, nuevoAlojamiento]);

        // Limpiar los campos del formulario y errores
        setIdAlojamiento('');
        setTitulo('');
        setDescripcion('');
        setTipoAlojamiento('');
        setUbicacion('');
        setPrecioDia('');
        setCantidadDormitorios('');
        setCantidadBanios('');
        setEstado('');
        setImagenCover('');
        setImagenCoverPreview('');
        setImagenes([]);
        setImagenesPreview([]);
        setServicios('');
        setErrors({});
    };

    return (
        <div className='contenedorAddAlojamientos'>
            <h2>Agregar Alojamiento</h2>
            <form onSubmit={handleSubmit}>
                <div className='contenedorForm'>
                    <label htmlFor="idAlojamiento">ID: </label>
                    <input
                        type="text"
                        id="idAlojamiento"
                        value={idAlojamiento}
                        onChange={(e) => setIdAlojamiento(e.target.value)}
                    />
                    {errors.idAlojamiento && <p className="error">{errors.idAlojamiento}</p>}

                    <label htmlFor="titulo">Titulo: </label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    {errors.titulo && <p className="error">{errors.titulo}</p>}

                    <label htmlFor="descripcion">Descripción: </label>
                    <input
                        type="text"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    {errors.descripcion && <p className="error">{errors.descripcion}</p>}

                    <label htmlFor="tipoAlojamiento">Tipo alojamiento: </label>
                    <input
                        type="text"
                        id='tipoAlojamiento'
                        value={tipoAlojamiento}
                        onChange={(e) => setTipoAlojamiento(e.target.value)}
                    />
                    {errors.tipoAlojamiento && <p className="error">{errors.tipoAlojamiento}</p>}

                    <label htmlFor="ubicacion">Ubicacion: </label>
                    <input
                        type="text"
                        id='ubicacion'
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                    />
                    {errors.ubicacion && <p className="error">{errors.ubicacion}</p>}

                    <label htmlFor="precioDia">Precio por dia: </label>
                    <input
                        type="text"
                        id='precioDia'
                        value={precioDia}
                        onChange={(e) => setPrecioDia(e.target.value)}
                    />
                    {errors.precioDia && <p className="error">{errors.precioDia}</p>}

                    <label htmlFor="cantidadDormitorios">Cantidad de dormitorios: </label>
                    <input
                        type="text"
                        id='cantidadDormitorios'
                        value={cantidadDormitorios}
                        onChange={(e) => setCantidadDormitorios(e.target.value)}
                    />
                    {errors.cantidadDormitorios && <p className="error">{errors.cantidadDormitorios}</p>}

                    <label htmlFor="cantidadBanios">Cantidad de banios: </label>
                    <input
                        type="text"
                        id='cantidadBanios'
                        value={cantidadBanios}
                        onChange={(e) => setCantidadBanios(e.target.value)}
                    />
                    {errors.cantidadBanios && <p className="error">{errors.cantidadBanios}</p>}

                    <label htmlFor="estado">Estado (Disponible, Reservado): </label>
                    <input
                        type="text"
                        id='estado'
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                    {errors.estado && <p className="error">{errors.estado}</p>}

                    <label htmlFor="imagenCover">Imagen de portada: </label>
                    <input
                        type="file"
                        id='imagenCover'
                        accept='image/*'
                        onChange={handleImagenCoverChange}
                    />
                    {errors.imagenCover && <p className="error">{errors.imagenCover}</p>}

                    {imagenCoverPreview && (
                        <img
                            src={imagenCoverPreview}
                            alt="Previsualizacion de la imagen de portada"
                            className='imagenPreview' />
                    )}

                    <label htmlFor="imagenes">Imagenes adicionales: </label>
                    <input
                        type="file"
                        id='imagenes'
                        accept='image/*'
                        multiple
                        onChange={handleImagenesChange}
                    />
                    {errors.imagenes && <p className="error">{errors.imagenes}</p>}

                    <div className='contenedorImagenesPreview'>
                        {imagenesPreview.map((preview, index) => (
                            <img
                                key={index}
                                src={preview}
                                alt={`Imagen ${index + 1}`}
                                className='imagenPreview' />
                        ))}
                    </div>

                    <label htmlFor="servicios">Servicios: </label>
                    <input
                        type="text"
                        id='servicios'
                        value={servicios}
                        onChange={(e) => setServicios(e.target.value)}
                    />
                    {errors.servicios && <p className="error">{errors.servicios}</p>}

                    <button type='submit'>Guardar</button>
                </div>
                <ul>
                    {alojamientos.map((alojamiento, index) => (
                        <li key={index}>
                            <h3>{alojamiento.titulo}</h3>
                            <p>{alojamiento.descripcion}</p>
                            <p>{alojamiento.tipoAlojamiento}</p>
                            <p>{alojamiento.ubicacion}</p>
                            <p>{alojamiento.precioDia}</p>
                            <p>{alojamiento.cantidadDormitorios}</p>
                            <p>{alojamiento.cantidadBanios}</p>
                            <p>{alojamiento.estado}</p>
                            {alojamientos.map((alojamiento, index) => (
                                <li key={index}>
                                    {alojamiento.titulo}
                                    {alojamiento.imagenCover && (
                                        <img
                                            src={alojamiento.imagenCover}
                                            alt="Imagen de portada"
                                            className='imagenPreview' />
                                    )}
                                </li>
                            ))}
                            {alojamiento.imagenes.map((imagen, idx) => (
                                <img
                                    key={idx}
                                    src={imagen}
                                    alt={`Imagen ${idx + 1}`}
                                    className='imagenPreview' />
                            ))}
                            <p>{alojamiento.servicios}</p>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
}
