import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Game from "./components/Game";
function App() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center bg-[#121212]">
        <div className="w-full h-full max-w-4xl px-4">
          <Navbar />
          {/* <Home /> */}
          <Game />
        </div>
      </div>
    </>
  );
}

export default App;
