import React from "react";
// import Navbar from "./components/navbar";
import Navbar from "./components/navbar/index";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";


const onsemitheme = createTheme({
  palette: {
    primary: {
      main: '#ff7920',
    },
    secondary: {
      main: '#f50057',
    }
  },
})




function App() {
  
  return (
    <ThemeProvider theme={onsemitheme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
