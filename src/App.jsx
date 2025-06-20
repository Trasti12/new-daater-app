// src/App.jsx
import React from 'react';
import AppHeader from './components/AppHeader';
import FiltroSelector from './components/FiltroSelector'; // 👈 Asegúrate de importar el componente

function App() {
  return (
    <>
      <AppHeader />
      <main style={{ padding: '2rem' }}>
        <FiltroSelector /> {/* Aquí lo insertamos para que se vea */}
      </main>
    </>
  );
}

export default App;
