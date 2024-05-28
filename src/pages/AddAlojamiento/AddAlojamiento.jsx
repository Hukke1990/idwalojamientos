import React, { useState } from 'react';
import './AddAlojamiento.css';

export function AddAlojamiento() {
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
    const [servicios, setServicios] = useState([]);
    const [alojamientos, setAlojamientos] = useState([]);
    const [errors, setErrors] = useState({});

    const serviciosPredefinidos = [
        { id: 1, nombre: 'Wifi', icono: 'bi bi-wifi' },
        { id: 2, nombre: 'Piscina', icono: 'bi bi-droplet' },
        { id: 3, nombre: 'Estacionamiento', icono: 'bi bi-car' },
        { id: 4, nombre: 'Desayuno', icono: 'bi bi-cup' }
    ];

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
        if (!servicios.length) newErrors.servicios = 'Servicios son requeridos';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

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
            servicios: servicios.map(servicioId => serviciosPredefinidos.find(s => s.id === parseInt(servicioId)))
        };

        setAlojamientos([...alojamientos, nuevoAlojamiento]);

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
        setServicios([]);
        setErrors({});
    };

    return (
        <div className='contenedorAddAlojamientos'>
            <h2>Agregar Alojamiento</h2>
            <p>Ingresa los datos del alojamiento que desea registrar</p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Alojamiento</legend>
                    <div className='contenedorForm'>
                        <label htmlFor="idAlojamiento" className='label'>
                            <input
                                type="text"
                                id="idAlojamiento"
                                placeholder=" "
                                value={idAlojamiento}
                                onChange={(e) => setIdAlojamiento(e.target.value)}
                                className='formInput'
                            />
                            <span className='label_name'>ID Alojamiento</span>
                        </label>
                        {errors.idAlojamiento && <p className="form-error">{errors.idAlojamiento}</p>}

                        <label htmlFor="titulo"><input
                            type="text"
                            id="titulo"
                            placeholder=' '
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className='formInput'
                        />
                            <span className='label_name'>Titulo</span>
                        </label>
                        {errors.titulo && <p className="form-error">{errors.titulo}</p>}

                        <label htmlFor="descripcion"><input
                            type="text"
                            id="descripcion"
                            placeholder=" "
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            className='formInput'
                        />
                            <span className='label_name'>Descripcion</span>
                        </label>
                        {errors.descripcion && <p className="form-error">{errors.descripcion}</p>}

                        <label htmlFor="tipoAlojamiento">
                            <input
                                type="text"
                                id='tipoAlojamiento'
                                placeholder=" "
                                value={tipoAlojamiento}
                                onChange={(e) => setTipoAlojamiento(e.target.value)}
                                className='formInput'
                            />
                            <span className='label_name'>Tipo de alojamiento</span>
                        </label>
                        {errors.tipoAlojamiento && <p className="form-error">{errors.tipoAlojamiento}</p>}

                        <label htmlFor="ubicacion"><input
                            type="text"
                            id='ubicacion'
                            placeholder=" "
                            value={ubicacion}
                            onChange={(e) => setUbicacion(e.target.value)}
                            className='formInput'
                        />
                            <span className='label_name'>Ubicacion</span>
                        </label>
                        {errors.ubicacion && <p className="form-error">{errors.ubicacion}</p>}

                        <label htmlFor="precioDia"><input
                            type="text"
                            id='precioDia'
                            placeholder=" "
                            value={precioDia}
                            onChange={(e) => setPrecioDia(e.target.value)}
                            className='formInput'
                        />
                            <span className='label_name'>Precio por día</span>
                        </label>
                        {errors.precioDia && <p className="form-error">{errors.precioDia}</p>}

                        <label htmlFor="cantidadDormitorios"><input
                            type="text"
                            id='cantidadDormitorios'
                            placeholder=" "
                            value={cantidadDormitorios}
                            onChange={(e) => setCantidadDormitorios(e.target.value)}
                            className='formInput'
                        />
                            <span className='label_name'>Cantidad de dormitorios</span>
                        </label>
                        {errors.cantidadDormitorios && <p className="form-error">{errors.cantidadDormitorios}</p>}

                        <label htmlFor="cantidadBanios"><input
                            type="text"
                            id='cantidadBanios'
                            placeholder=" "
                            value={cantidadBanios}
                            onChange={(e) => setCantidadBanios(e.target.value)}
                            className='formInput'
                        />
                            <span className='label_name'>Cantidad de baños</span>
                        </label>
                        {errors.cantidadBanios && <p className="form-error">{errors.cantidadBanios}</p>}

                        <label htmlFor="estado"><input
                            type="text"
                            id='estado'
                            placeholder=" "
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            className='formInput'
                        />
                            <span className='label_name'>Estado</span>
                        </label>
                        {errors.estado && <p className="form-error">{errors.estado}</p>}

                        <label htmlFor="imagenCover"><input
                            type="file"
                            id="imagenCover"
                            onChange={handleImagenCoverChange}
                            className='formInput'
                        />
                            <span className='label_name'>Imagen de portada</span>
                        </label>
                        {imagenCoverPreview && <img src={imagenCoverPreview} alt="Vista previa de la imagen de portada" className='imagenCoverPreview' />}
                        {errors.imagenCover && <p className="form-error">{errors.imagenCover}</p>}

                        <label htmlFor="imagenes"><input
                            type="file"
                            id="imagenes"
                            multiple
                            onChange={handleImagenesChange}
                            className='formInput'
                        />
                            <span className='label_name'>Imágenes</span>
                        </label>
                        {imagenesPreview.map((imagen, index) => (
                            <img key={index} src={imagen} alt={`Vista previa ${index + 1}`} className='imagenesPreview' />
                        ))}

                        <div className='contenedorAgregarServicios'>
                            <h3>Servicios</h3>
                            <div className='contenedorCheckbox'>
                                {serviciosPredefinidos.map(servicio => (
                                    <label key={servicio.id} className='servicioCheckbox'>
                                        <input
                                            type="checkbox"
                                            value={servicio.id}
                                            checked={servicios.includes(servicio.id.toString())}
                                            onChange={(e) => {
                                                const servicioId = e.target.value;
                                                setServicios(prev =>
                                                    e.target.checked
                                                        ? [...prev, servicioId]
                                                        : prev.filter(id => id !== servicioId)
                                                );
                                            }}
                                        />
                                        <div className='servicioNombreIcono'>
                                            <i className={servicio.icono}></i>
                                            <span className='servicioName'>{servicio.nombre}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>

                        </div>
                        {errors.servicios && <p className="form-error">{errors.servicios}</p>}

                    </div>
                    <div className="boton-container">
                        <button type="submit">Agregar Alojamiento</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
