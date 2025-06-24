import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import FiltroSelector from './components/FiltroSelector';
import FiltroAvanzado from './components/FiltroAvanzado';
import { Box } from '@mui/material'; // corregido: "button" no es necesario aquí

function App() {
  // Paso 1: Estado para los filtros y validación
  const [filtros, setFiltros] = useState({
    pais: '',
    base: '',
    tabla: '',
    fechas: {
      desde: null,
      hasta: null
    }
  });

  const [mostrarAvanzado, setMostrarAvanzado] = useState(false);

  const filtrosCompletos =
    filtros.pais && filtros.base && filtros.tabla && filtros.fechas?.desde && filtros.fechas.hasta;

  return (
    <>
      <main className="main-container" style={{ marginTop: '64px' }}>
        <AppHeader />
        <FiltroSelector filtros={filtros} setFiltros={setFiltros} />

        {!mostrarAvanzado && filtrosCompletos && (
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <button
              onClick={() => setMostrarAvanzado(true)}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              >
                continuar
              </button>
          </Box>
        )}
      </main>
      {mostrarAvanzado && (
          <FiltroAvanzado filtros={filtros} />
        )}
    </>
  );
}

export default App;

