import React from 'react';
import DataTable from '../../atoms/table';

const Registros = () => {
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fecha', headerName: 'Fecha', width: 100 },
    { field: 'especie', headerName: 'Especie', width: 120 },
    { field: 'cantidad', headerName: 'Cantidad', width: 100 },
    { field: 'sexo', headerName: 'Sexo', width: 100 },
    { field: 'ingreso', headerName: 'Ingreso', width: 100 },
    { field: 'estado', headerName: 'Estado', width: 100 },
    { field: 'detalle', headerName: 'Detalle', width: 400 },
    { field: 'imagen', headerName: 'Imagenes', width: 150 },
    { field: 'actions', headerName: 'Acciones', width: 150 },
  ];

  const rows = [
    {},
  ];

  return (
    <main className="py-4 bg-white border-t">
      <DataTable rows={rows} columns={columns} />
    </main>
  );
};

export default Registros;
