import React from "react"
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header"
import AboutMe from "./pages/AboutMe";



function App() {
  return (
    <div>
        <Header/>
        <AboutMe/>
    </div>
    );
  }


export default App;
