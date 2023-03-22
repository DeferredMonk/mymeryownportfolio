import "./App.css";
import "./components/Landingpage";
import Landingpage from "./components/Landingpage";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import { strings } from "./utils/localization";

strings.setLanguage("en");

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
                <Footer />
              </React.Fragment>
            }
          />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
