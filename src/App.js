import React from "react";
import Content from "./components/content/index";
import Layout from "./components/layout/index";
import Login from "./pages/login/index";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";


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
  return (
    <ThemeProvider theme={onsemitheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter >
          <Layout >
            <Routes>
              {/* <Route path="/" element={<Footer />} /> */}
              <Route path="/content/:type" element={<Content />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
