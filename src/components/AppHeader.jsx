import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Popover,
  Divider,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LineWeightIcon from '@mui/icons-material/LineWeight';

function AppHeader() {
  // Simulamos un usuario
  const user = {
    name: 'Example',
    email: 'example@example.com',
    plan: 'Plus',
    daysLeft: 120,
    profile: 'Admin',
  };

  // Estado para el popover
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogout = () => {
    alert('Cerrar sesión');
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Daater</Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography>{user.name}</Typography>
            <IconButton color="inherit" onClick={handleOpen}>
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box p={2} width="250px">
          <Typography variant="subtitle2">
            <strong>Usuario:</strong> {user.email}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Tipo de usuario:</strong> {user.profile}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Plan:</strong> {user.plan}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Días restantes:</strong> {user.daysLeft}
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Box display="flex" flexDirection="column" gap={1}>
            <Button
              startIcon={<LineWeightIcon />}
              variant="outlined"
              color="primary"
              href="https://daater.com/precios-y-planes/"
              target="_blank"
            >
              Planes
            </Button>
            <Button
              startIcon={<LocalAtmIcon />}
              variant="outlined"
              color="secondary"
              onClick={() => alert('Ir a pagos')}
            >
              Pagos
            </Button>
            <Button
              startIcon={<ExitToAppIcon />}
              variant="outlined"
              color="error"
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}

export default AppHeader;

