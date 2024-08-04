import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return ( 
    <>
    <NavBar />
    <Home />
    <Skills />
    <Contact />
    </>
  );
}

export default App;
