import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ExerciseDetails from "./pages/ExerciseDetails/ExerciseDetails";
import WebFooter from "./Components/Footer/WebFooter";
function App() {
  return (
    <Box width="400px" sx={{width:'1488px'}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <WebFooter />
    </Box>
  );
}

export default App;
