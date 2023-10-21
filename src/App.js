import React from "react";
// import Navbar from "./components/navbar";
import Content from "./components/content/index";
import Layout from "./components/layout/index";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Router, Route } from "react-router-dom";


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
        {/* <Router> */}
          <Layout>
            {/* <Route exact path="/"> */}
              <Content />
              {/* </Route> */}
          </Layout>
        {/* </Router> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
