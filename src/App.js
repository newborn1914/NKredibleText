import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="NKredibleText" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/About"
            element={
            <>
            {<About mode={mode}/>}
            </>
            }
            />
            <Route path="/"
            element={
              <>
            {<TextForm heading="Enter your text!" mode={mode}/>}
            </>
          }
          />
          </Routes>
        </div>
      </Router>
    </>
  );
}

 export default App;
