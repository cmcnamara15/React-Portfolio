import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NavBar from "./components/navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/" element={<Portfolio />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
    </ThemeProvider>
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
