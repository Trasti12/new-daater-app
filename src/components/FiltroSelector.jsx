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

const FiltroSelector = () => {
  const [pais, setPais] = useState("");
  const [base, setBase] = useState("");
  const [tabla, setTabla] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");

  const handleBaseChange = (event) => {
    const selectedBase = event.target.value;
    setBase(selectedBase);

    const anios = baseAniosDisponibles[selectedBase];
    if (anios?.length) {
      setFechaDesde(`01/01/${anios[0]}`);
      setFechaHasta(`31/12/${anios[anios.length - 1]}`);
    } else {
      setFechaDesde("");
      setFechaHasta("");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" mb={2}>Filtros de búsqueda</Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>País</InputLabel>
        <Select value={pais} label="País" onChange={(e) => setPais(e.target.value)}>
          <MenuItem value="Colombia">Colombia</MenuItem>
          <MenuItem value="Perú">Perú</MenuItem>
          <MenuItem value="Ecuador">Ecuador</MenuItem>
          <MenuItem value="Panamá">Panamá</MenuItem>
          <MenuItem value="Chile">Chile</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Base</InputLabel>
        <Select value={base} label="Base" onChange={handleBaseChange}>
          {Object.keys(baseAniosDisponibles).map((b) => (
            <MenuItem key={b} value={b}>{b}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Tabla</InputLabel>
        <Select value={tabla} label="Tabla" onChange={(e) => setTabla(e.target.value)}>
          <MenuItem value="IMPO">IMPO</MenuItem>
          <MenuItem value="EXPO">EXPO</MenuItem>
        </Select>
      </FormControl>

      <Box display="flex" gap={2}>
        <TextField fullWidth label="Fecha Desde" value={fechaDesde} disabled />
        <TextField fullWidth label="Fecha Hasta" value={fechaHasta} disabled />
      </Box>
    </Box>
  );
};

export default FiltroSelector;
