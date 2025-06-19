import AppHeader from './components/AppHeader';

function App() {
  return (
    <div>
      <AppHeader />

      <div
        style={{
          minHeight: '100vh',
          paddingTop: '80px', // espacio para el header fijo
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2>Bienvenido a Daater 💻</h2>
        <p>Tu nueva app con React + Vite + MUI ya está en marcha.</p>
      </div>
    </div>
  );
}

export default App;
