import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { FaEdit , FaTrash , FaEye  } from 'react-icons/fa';
import axios from 'axios'
import moment from 'moment';
import apiUrl from './apiConfig';

const DataTable = ({ rows, columns }) => {

  const [dataRegistros, setDataRegistros] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/registros/obtener`)
      .then(res => {
        console.log('Datos recibidos:', res.data);
        setDataRegistros(res.data);
      })
      .catch(err => {
        console.error('Error al obtener datos:', err);
      });
  }, []);

  const handleEditClick = (params) => {
    // Lógica para manejar la edición
    console.log('Editar', params);
  };

  const handleDeleteClick = (params) => {
    // Lógica para manejar la eliminación
    console.log('Eliminar', params);
  };

  const handleViewClick = (params) => {
    // Lógica para visualizar ingreso
    console.log('View', params);
  };


  const updatedColumns = columns.map((col) => {
    if (col.field === 'actions') {
      return {
        ...col,
        renderCell: (params) => (
          <>
            <FaEdit
              style={{ cursor: 'pointer', marginRight: 8 }}
              onClick={() => handleEditClick(params)}
            />
            <FaTrash style={{ cursor: 'pointer' }} onClick={() => handleDeleteClick(params)} />
            <FaEye style={{ cursor: 'pointer', marginLeft: '8' }} onClick={() => handleViewClick(params)} />
          </>
        ),
      };
    }
    return col;
  });
    
    console.log('Updated Columns:', updatedColumns);

  const formattedRows = dataRegistros.map((row, index)=> ({
    id: index,
    ...row,
    fecha: moment(row.date).format('DD-MM-YYYY'),
    numeroImagenes: row.imagenes.length,
    imagen: row.imagenes.length > 0
      ? `${row.imagenes.length} Imagen${row.imagenes.length > 1 ? 'es' : ''}`
      : 'Sin Imágenes',
  }));

  console.log('Formatted Rows:', formattedRows);


  return (
    <div style={{ height: '800px', maxWidth: '100%', overflow: 'auto' }}>
      <DataGrid
        rows={formattedRows}
        columns={updatedColumns}
        pageSize={5}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
        getRowId={(row) => row._id}
        className="custom-data-grid"
        rowClassName={(params) => (params.row.id % 2 === 0 ? 'even-row' : 'odd-row')}
      />
    </div>
  );  
};

export default DataTable;

