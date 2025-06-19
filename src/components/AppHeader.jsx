import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

function AppHeader() {
  // Simulamos un usuario que viene del contexto o props
  const user = {
    name: 'Tatiana',
    email: 'tatiana@example.com',
  };

  const handleLogout = () => {
    alert('Cerrar sesión (aquí va la lógica luego)');
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo o nombre de la empresa */}
        <Typography variant="h6" component="div">
          Daater
        </Typography>

        {/* Info del usuario + botón */}
        <Box display="flex" alignItems="center" gap={2}>
          <Typography>{user.name}</Typography>
          <Button color="inherit" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
