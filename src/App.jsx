// src/App.jsx
import React from 'react';
import AppHeader from './components/AppHeader';
import FiltroSelector from './components/FiltroSelector'; 

function App() {
  return (
    <>
      <AppHeader />
      <main style={{ padding: '2rem' }}>
        <FiltroSelector /> {}
      </main>
    </>
  );
}

export default App;
