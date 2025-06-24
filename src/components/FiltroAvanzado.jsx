import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FiltroAvanzado = ({ filtros }) => {
  const [filtro, setFiltro] = useState({
    importador: '',
    exportador: '',
    partida: '',
    descripcion: '',
    departamento: '',
    numeroDeclaracion: ''
  });

  const handleChange = (field, value) => {
    setFiltro((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box
      sx={{
        background: '#fff',
        borderRadius: '12px',
        p: 4,
        maxWidth: '1100px',
        mx: 'auto',
        mt: 4,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      <Typography
        variant="h6"
        sx={{  }}
      >
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 3
        }}
      >
        {/* Importador */}
        <FormControl fullWidth>
          <InputLabel>Importador</InputLabel>
          <Select
            value={filtro.importador}
            label="Importador"
            onChange={(e) => handleChange('importador', e.target.value)}
          >
            <MenuItem value="Importador A">Importador A</MenuItem>
            <MenuItem value="Importador B">Importador B</MenuItem>
          </Select>
        </FormControl>

        {/* Exportador / Proveedor */}
        <FormControl fullWidth>
          <InputLabel>Exportador (Proveedor)</InputLabel>
          <Select
            value={filtro.exportador}
            label="Exportador (Proveedor)"
            onChange={(e) => handleChange('exportador', e.target.value)}
          >
            <MenuItem value="Proveedor X">Proveedor X</MenuItem>
            <MenuItem value="Proveedor Y">Proveedor Y</MenuItem>
          </Select>
        </FormControl>

        {/* Partida arancelaria */}
        <TextField
          fullWidth
          label="Partida arancelaria"
          value={filtro.partida}
          onChange={(e) => handleChange('partida', e.target.value)}
        />

        {/* Descripción mercancía */}
        <TextField
          fullWidth
          label="Descripción mercancía"
          value={filtro.descripcion}
          onChange={(e) => handleChange('descripcion', e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )
          }}
        />

        {/* Departamento importador */}
        <FormControl fullWidth>
          <InputLabel>Departamento importador</InputLabel>
          <Select
            value={filtro.departamento}
            label="Departamento importador"
            onChange={(e) => handleChange('departamento', e.target.value)}
          >
            <MenuItem value="Bogotá">Bogotá</MenuItem>
            <MenuItem value="Antioquia">Antioquia</MenuItem>
            <MenuItem value="Valle del Cauca">Valle del Cauca</MenuItem>
          </Select>
        </FormControl>

        {/* Número de declaración */}
        <TextField
          fullWidth
          label="Número de declaración"
          value={filtro.numeroDeclaracion}
          onChange={(e) => handleChange('numeroDeclaracion', e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default FiltroAvanzado;


