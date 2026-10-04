import styles from "./App.module.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { fetchPortfolio } from "./utils/portfolioApi";
import Landingpage from "./components/Pages/Landingpage";
import Skills from "./components/Pages/Skills";
import Experience from "./components/Pages/Experience";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchPortfolio(controller.signal)
      .then(setPortfolio)
      .catch((requestError) => {
        if (requestError.name !== "AbortError") setError(requestError);
      });

    return () => controller.abort();
  }, []);

  if (error) return <p>Unable to load the portfolio.</p>;
  if (!portfolio) return <p>Loading portfolio...</p>;

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Landingpage portfolio={portfolio} />
                <Skills portfolio={portfolio} />
                <Experience experiences={portfolio.workExperiences} />
                <Projects projects={portfolio.projects} />
                <Contact />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
