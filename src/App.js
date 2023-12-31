import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NavBar from "./components/Navbar";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Photos from "./pages/Photos";
import Footer from "./components/Footer";

function App() {
  const theme = createTheme();

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Layout>
          <Routes>
          <Route path="/" element={<AboutMe />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/Photos" element={<Photos />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
    <Footer />
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div>
//         <Header/>
//         <AboutMe/>
//     </div>
//     );
//   }


// export default App;
