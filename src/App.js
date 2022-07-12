import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {
  const [selectMode, setselectMode] = useState("light"); 

  selectMode === "light"
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "#333333");
// dark mode function
  const toggleon = () => { 
    if (selectMode === "light") {
      setselectMode("dark");
    } else setselectMode("light");
  };
  return (
    <>
      <Navbar
        navTitle={"Words Tool"}
        screenMode={selectMode}
        toogleBtn={toggleon}
      />
      <Textbox screenMode={selectMode} />
    </>
  );
}

export default App;
