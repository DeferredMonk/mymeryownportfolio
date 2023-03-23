import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { strings } from "./utils/localization";
import Landingpage from "./components/Pages/Landingpage";
import Skills from "./components/Pages/Skills";
import Projects from "./components/Pages/Projects";
import Footer from "./components/Pages/Footer";
import Project from "./components/Pages/Project";

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
