import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Body from "./components/body/Body";
import Education from "./components/Education/Education";

function App() {
  return (
    <>
    <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Education" element={ <Education />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
