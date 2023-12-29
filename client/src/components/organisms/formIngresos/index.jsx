import React, { useState } from "react";
import { FaChevronDown, FaImage, FaTrash } from 'react-icons/fa';
import toast , { Toaster } from 'react-hot-toast';
import uniquid from 'uniquid';
import axios from 'axios';

const FormIngresos = () => {

const [sexo, setSexo] = useState("");
const [date, setDate] = useState("");
const [ingreso, setIngreso] = useState("");
const [especie, setEspecie] = useState("");
const [estado, setEstado] = useState("");
const [cantidad, setCantidad] = useState('');
const [detalle, setDetalle] = useState('');
const [imagenes, setImagenes] = useState([]);
const [error, setError] = useState('');

const handleChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const handleImagenChange = (event) => {
    const nuevaImagen = event.target.files[0];

    if (nuevaImagen) {
      if (imagenes.length < 4) {
        setImagenes([...imagenes, nuevaImagen]);
        setError('');
      } else {
        setError('Solo se permiten hasta 4 imágenes.');
      }
    }
  };

  const handleEliminarImagen = (index) => {
    const nuevasImagenes = [...imagenes];
    nuevasImagenes.splice(index, 1);
    setImagenes(nuevasImagenes);
  };

  const handleRegistro = async () => {
    const formData = new FormData();

    formData.append('date', date);
    formData.append('especie', especie);
    formData.append('cantidad', cantidad);
    formData.append('sexo', sexo);
    formData.append('ingreso', ingreso);
    formData.append('estado', estado);
    formData.append('detalle', detalle);
    formData.append('idusuario', uniquid());

    for (let i = 0; i < imagenes.length; i++) {
        try {
          formData.append('imagenes', imagenes[i]);
        } catch (error) {
          console.error('Error al adjuntar imagen:', error);
          toast.error('Error al adjuntar imágenes. Inténtalo de nuevo.');
        }
      }

    console.log('Datos a enviar: ', formData);

    try {
        const res = await axios.post('http://localhost:5000/api/registros', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

      setDate('');
      setEspecie('');
      setCantidad('');
      setSexo('');
      setIngreso('');
      setEstado('');
      setDetalle('');
      setImagenes([]);
      setError('');

        console.log(res.data);
        toast.success('Se registro correctamente');
    } catch (err) {
        console.error(err);
        toast.error('Error en el registro. Inténtalo de nuevo.');
    }
};


  return (
      <form className="p-5">
        <h1 className="text-white text-start font-bebasneue text-2xl mb-4">
            Completa los siguientes datos
        </h1>
        <div className="flex flex-col gap-4">
              <div className="w-full">
                <h1 className="text-white text-poppins mb-1">Fecha de ingreso</h1>
                <input
                  className="w-full py-4 px-4 rounded-lg"
                  id="date"
                  type="date"
                  placeholder="01/01/2023"
                  name="date"
                  value={date}
                  onChange={(event) => handleChange(event, setDate)}
                />
                <p className="text-sm italic text-red-500">{""}</p>
              </div>
              
              <div className="w-full">
                <h1 className="text-white text-poppins mb-1">Especie</h1>
                <input
                  className="w-full py-4 px-4 rounded-lg"
                  id="especie"
                  type="text"
                  placeholder="Ingrese la especie..."
                  name="especie"
                  value={especie}
                  onChange={(event) => handleChange(event, setEspecie)}
                />
                <p className="text-sm italic text-red-500">{""}</p>
              </div>

              <div className="w-full">
                <h1 className="text-white text-poppins mb-1">Cantidad</h1>
                <input
                  className="w-full py-4 px-4 rounded-lg"
                  id="cantidad"
                  type="number"
                  placeholder="Ingrese la cantidad"
                  name="cantidad"
                  value={cantidad}
                  onChange={(event) => handleChange(event, setCantidad)}
                />
                <p className="text-sm italic text-red-500">{""}</p>
              </div>

                <div className="w-full">
                    <label htmlFor="sexo" className="text-white text-poppins mb-1 block">
                        Sexo
                    </label>
                    <div className="relative">
                        <select
                        className="w-full py-4 px-4 rounded-lg appearance-none"
                        id="sexo"
                        name="sexo"
                        value={sexo}
                        onChange={(event) => handleChange(event, setSexo)}
                        >
                        <option value="" disabled>
                            Seleccione el sexo
                        </option>
                        <option value="macho">Macho</option>
                        <option value="hembra">Hembra</option>
                        <option value="ambos">Ambos</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaChevronDown size={10} />
                        </div>
                    </div>
                    <p className="text-sm italic text-red-500">{""}</p>
                </div>
                <div className="w-full">
                    <label htmlFor="ingreso" className="text-white text-poppins mb-1 block">
                        Ingreso
                    </label>
                    <div className="relative">
                        <select
                        className="w-full py-4 px-4 rounded-lg appearance-none"
                        name="ingreso"
                        value={ingreso}
                        onChange={(event) => handleChange(event, setIngreso)}
                        >
                        <option value="" disabled>
                            De donde proviene
                        </option>
                            <option value="rescate">Rescate</option>
                            <option value="mascotismo">Mascotismo</option>
                            <option value="decomiso">Decomiso</option>
                            <option value="zoo">Zoo</option>
                            <option value="otro">Otro</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaChevronDown size={10} />
                        </div>
                    </div>
                    <p className="text-sm italic text-red-500">{""}</p>
                </div>
                <div className="w-full">
                    <label htmlFor="estado" className="text-white text-poppins mb-1 block">
                        Estado
                    </label>
                    <div className="relative">
                        <select
                        className="w-full py-4 px-4 rounded-lg appearance-none"
                        name="estado"
                        value={estado}
                        onChange={(event) => handleChange(event, setEstado)}
                        >
                        <option value="" disabled>
                            Seleccione el estado
                        </option>
                            <option value="malo">Malo</option>
                            <option value="regular">Regular</option>
                            <option value="bueno">Bueno</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaChevronDown size={10} />
                        </div>
                    </div>
                    <p className="text-sm italic text-red-500">{""}</p>
                </div>

                <div className="w-full">
                    <h1 className="text-white text-poppins mb-1">Detalle</h1>
                    <textarea
                        className="w-full py-4 px-4 rounded-lg"
                        id="detalle"
                        placeholder="Detalles sobre el ingreso..."
                        name="detalle"
                        value={detalle}
                        onChange={(event) => handleChange(event, setDetalle)}
                    />
                    <p className="text-sm italic text-red-500">{''}</p>
                </div>

                <div className="w-full">
                    <h1 className="text-white text-poppins mb-1">Adjuntar Imágenes (Hasta 4)</h1>
                    <label className="block w-full p-4 border-dashed border-2 border-gray-300 rounded-lg cursor-pointer">
                        <input
                        type="file"
                        id="imagenes"
                        name="imagenes"
                        className="hidden"
                        onChange={(event) => handleImagenChange(event)}
                        accept="image/*"
                        multiple
                        />
                        <div className="flex flex-wrap items-center">
                        {imagenes.map((imagen, index) => (
                            <div key={index} className="w-1/4 p-2 relative">
                            <img
                                src={URL.createObjectURL(imagen)}
                                alt={`Miniatura ${index + 1}`}
                                className="w-full h-auto rounded"
                            />
                            <button
                                className="absolute top-2 right-2 text-red-500 cursor-pointer"
                                onClick={() => handleEliminarImagen(index)}
                            >
                                <FaTrash />
                            </button>
                            </div>
                        ))}
                        {imagenes.length < 4 && (
                            <div className={`w-4/4 p-2 flex flex-row justify-center items-center gap-2 ${imagenes.length > 0 ? 'hidden' : ''}`}>
                                <FaImage className="text-3xl text-gray-500" />
                                <p className="text-gray-700">Seleccionar imágenes</p>
                            </div>
                        )}
                        </div>
                    </label>
                    {error && <p className="text-sm italic text-red-500 mt-2">{error}</p>}
                    </div>
                    
                    <div className="flex items-center justify-center mb-8 mt-2 w-full">
                        <button
                            className="w-full bg-secondary-3 hover:bg-secondary-4 text-white font-medium py-4 px-5 rounded-lg focus:outline-none focus:shadow-outline font-poppins"
                            type="button"
                            onClick={handleRegistro}
                        >
                            Registrar
                        </button>
                        <Toaster />
                    </div>

        </div>

      </form>
  );
};

export default FormIngresos;
