import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Inicio = () => {
  const [codigoAcceso, setCodigoAcceso] = useState('');
  const [codigoCorrecto, setCodigoCorrecto] = useState(false);
  const navigate = useNavigate();

  const handleIngresar = () => {
    // Lógica para verificar el código de acceso
    if (codigoAcceso === 'Ingresar') {
      setCodigoCorrecto(true);
      navigate('/home');
    } else {
      alert('Código incorrecto. Inténtalo de nuevo.');
      setCodigoAcceso('');
    }
  };

  return (
    <div className='bg-primary-1 p-6 flex flex-col items-center h-screen'>
        <img className='w-60 h-60 mt-6' src={logo}/>
      <h2 className='text-secondary-1 font-bebasneue text-4xl pt-8'>CODIGO DE INGRESO</h2>
      {!codigoCorrecto && (
        <>
          <input
            className='py-4 px-4 rounded-lg mt-2 w-full'
            type="password"
            placeholder="Ingrese el código de acceso"
            value={codigoAcceso}
            onChange={(e) => setCodigoAcceso(e.target.value)}
          />
          <button className='w-full mt-4 bg-secondary-3 hover:bg-secondary-4 text-white font-medium py-4 px-5 rounded-lg focus:outline-none focus:shadow-outline font-poppins' onClick={handleIngresar}>Ingresar</button>
        </>
      )}
    </div>
  );
};

export default Inicio;
