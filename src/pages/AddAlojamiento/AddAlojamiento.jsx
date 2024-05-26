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
                        />
                            <span className='label_name'>Precio por dia</span>
                        </label>
                        {errors.precioDia && <p className="form-error">{errors.precioDia}</p>}


                        <label htmlFor="cantidadDormitorios"><input
                            type="text"
                            id='cantidadDormitorios'
                            placeholder=" "
                            value={cantidadDormitorios}
                            onChange={(e) => setCantidadDormitorios(e.target.value)}
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
                        />
                            <span className='label_name'>Cantidad de banios</span>
                        </label>
                        {errors.cantidadBanios && <p className="form-error">{errors.cantidadBanios}</p>}

                        <label htmlFor="estado">
                            <select
                                id='estado'
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                className="estado-select"
                            >
                                <option value="" disabled hidden>Selecciona un estado</option>
                                <option value="Disponible">Disponible</option>
                                <option value="Ocupado">Ocupado</option>
                            </select>
                        </label>
                        {errors.estado && <p className="form-error">{errors.estado}</p>}


                        <label htmlFor="imagenCover" className='contenedorImagenCover'><input
                            type="file"
                            id='imagenCover'
                            placeholder=" "
                            accept='image/*'
                            className='imagenCover'
                            onChange={handleImagenCoverChange}
                        />
                            <span className='label_name'>Imagen de portada</span>
                        </label>
                        {errors.imagenCover && <p className="form-error">{errors.imagenCover}</p>}


                        {imagenCoverPreview && (
                            <img
                                src={imagenCoverPreview}
                                alt="Previsualizacion de la imagen de portada"
                                className='imagenCoverPreview' />
                        )}

                        <label htmlFor="imagenes"><input
                            type="file"
                            id='imagenes'
                            placeholder=" "
                            accept='image/*'
                            multiple
                            onChange={handleImagenesChange}
                        />
                            <span className='label_name'>Otras imagenes</span>
                            {errors.imagenes && <p className="form-error">{errors.imagenes}</p>}
                        </label>
                        {errors.imagenCover && <p className="form-error">{errors.imagenCover}</p>}

                        <div className='contenedorImagenesPreview'>
                            {imagenesPreview.map((preview, index) => (
                                <img
                                    key={index}
                                    src={preview}
                                    alt={`Imagen ${index + 1}`}
                                    className='imagenPreview' />
                            ))}
                        </div>

                        <label htmlFor="servicios"><input
                            type="text"
                            id='servicios'
                            placeholder=" "
                            value={servicios}
                            onChange={(e) => setServicios(e.target.value)}
                        />
                            <span className='label_name'>Servicios</span>
                        </label>
                        {errors.servicios && <p className="form-error">{errors.servicios}</p>}

                        <button type='submit' className='btn guardarAlojamiento'>
                            <span className='span1'></span>
                            <span className='span2'></span>
                            <span className='span3'></span>
                            <span className='span4'></span>
                            Guardar</button>
                    </div>
                    <ul className='contenedorDatosCargados'>
                        {alojamientos.map((alojamiento, index) => (
                            <li key={index}>
                                <p>{alojamiento.titulo}</p>
                                <p>{alojamiento.descripcion}</p>
                                <p>{alojamiento.tipoAlojamiento}</p>
                                <p>{alojamiento.ubicacion}</p>
                                <p>{alojamiento.precioDia}</p>
                                <p>{alojamiento.cantidadDormitorios}</p>
                                <p>{alojamiento.cantidadBanios}</p>
                                <p>{alojamiento.estado}</p>
                                {alojamientos.map((alojamiento, index) => (
                                    <li key={index}>
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
                </fieldset>
            </form>
        </div>
    );
}
