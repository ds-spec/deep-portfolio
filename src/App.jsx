import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Game from "./components/Game";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center bg-[#121212]">
        <div className="w-full h-full max-w-4xl px-4">
          <Navbar />
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<></>} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
