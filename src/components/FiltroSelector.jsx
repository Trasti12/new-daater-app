import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, Typography, TextField } from "@mui/material";

const baseAniosDisponibles = {
  "DAATER ONLINE 2019-2020": [2019, 2020],
  "DAATER ONLINE 2021-2022": [2021, 2022],
  "DAATER PLUS 2023": [2023],
  "DAATER ONLINE 2023-2024": [2023, 2024],
  "DAATER PLUS 2024": [2024],
  "DAATER ONLINE 2025": [2025],
  "DAATER PLUS 2025": [2025],
};

const FiltroSelector = ({ filtros, setFiltros }) => {
  const handleBaseChange = (event) => {
    const selectedBase = event.target.value;

    const anios = baseAniosDisponibles[selectedBase];
    if (anios?.length) {
      setFiltros(prev => ({
        ...prev,
        base: selectedBase,
        fechas: {
          desde: dayjs(`${anios[0]}-01-01`),
          hasta: dayjs(`${anios[anios.length - 1]}-12-31`)
        }
      }));
    } else {
      setFiltros(prev => ({
        ...prev,
        base: selectedBase,
        fechas: { desde: dayjs(), hasta: dayjs() }
      }));
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2,
      padding: 2,
      marginTop: '64px',
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <FormControl sx={{ width: 200 }}>
        <InputLabel>País</InputLabel>
        <Select
          value={filtros.pais}
          label="País"
          onChange={(e) => setFiltros(prev => ({ ...prev, pais: e.target.value }))}
        >
          <MenuItem value="Colombia">Colombia</MenuItem>
          <MenuItem value="Perú">Perú</MenuItem>
          <MenuItem value="Ecuador">Ecuador</MenuItem>
          <MenuItem value="Panamá">Panamá</MenuItem>
          <MenuItem value="Chile">Chile</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width: 200 }}>
        <InputLabel>Base</InputLabel>
        <Select
          value={filtros.base}
          label="Base"
          onChange={handleBaseChange}
        >
          {Object.keys(baseAniosDisponibles).map((b) => (
            <MenuItem key={b} value={b}>{b}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ width: 200 }}>
        <InputLabel>Tabla</InputLabel>
        <Select
          value={filtros.tabla}
          label="Tabla"
          onChange={(e) => setFiltros(prev => ({ ...prev, tabla: e.target.value }))}
        >
          <MenuItem value="IMPO">IMPO</MenuItem>
          <MenuItem value="EXPO">EXPO</MenuItem>
        </Select>
      </FormControl>

      <Box display="flex" gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Desde"
            value={filtros.fechas?.desde || null}
            onChange={(newValue) => setFiltros(prev => ({
              ...prev,
              fechas: { ...prev.fechas, desde: newValue }
            }))}
            slotProps={{ textField: { fullWidth: true } }}
          />
          <DatePicker
            label="Hasta"
            value={filtros.fechas?.hasta || null}
            onChange={(newValue) => setFiltros(prev => ({
              ...prev,
              fechas: { ...prev.fechas, hasta: newValue }
            }))}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default FiltroSelector;
