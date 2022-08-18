import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Body from "./components/body/Body";
import Education from "./components/Education/Education";
import Project from "./components/Projects/Project";
import Experience from "./Experience/Experience";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Education" element={ <Education />} />
        <Route path="/Experience" element={ <Experience />} />
        <Route path="/Projects" element={ < Project />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>

  );
}

export default App;
