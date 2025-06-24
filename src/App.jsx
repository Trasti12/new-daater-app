import React from 'react';
import AppHeader from './components/AppHeader';
import FiltroSelector from './components/FiltroSelector'; 
import { Box } from '@mui/material';


function App() {
  return (
    <>
      <main className="main-container" style={{ marginTop: '64px' }}>
        <AppHeader />
        <FiltroSelector />
      </main>

    </>
  );
}


export default App;
