import "./App.css";
import "./components/Landingpage";
import Landingpage from "./components/Landingpage";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Landingpage />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
