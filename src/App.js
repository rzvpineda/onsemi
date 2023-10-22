import React from "react";
import Content from "./components/content/index";
import Layout from "./components/layout/index";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";


const onsemitheme = createTheme({
  palette: {
    // primary: {
    //   main: '#ff7920',
    // },
    // secondary: {
    //   main: '#ff7920',
    // }
  },
})

function App() {
  // const location = useLocation();
  return (
    <ThemeProvider theme={onsemitheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter >
          <Layout >
            <Routes>
              {/* <Route path="/" element={<Content />} /> */}
              <Route path="/content/:type" element={<Content />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
