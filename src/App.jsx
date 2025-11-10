import { useState } from "react";
import { Box, Typography } from "@mui/material";
import GridPositionForm from "./components/GridPositionForm/GridPositionForm";
import GridBoard from "./components/GridBoard/GridBoard";

function App() {
  const [position, setPosition] = useState("1,1 NORTH");

  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <Typography variant="h4" gutterBottom> Grid Visualizer </Typography>
      <GridPositionForm onSubmit={setPosition} />
      <GridBoard position={position} />
    </Box>
  );
}

export default App;
