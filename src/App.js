import "./App.css";
import "./components/Landingpage";
import Landingpage from "./components/Landingpage";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Landingpage />
                <Skills />
                <Projects />
              </React.Fragment>
            }
          />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
