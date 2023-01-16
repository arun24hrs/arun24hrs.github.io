import "./App.css";
import Header from "./Components/Header";

import Navbar from "./Components/Navbar";
import ProjectContainer from "./Components/ProjectContainer";
import TechSkills from "./Components/TechSkills";
import Tools from "./Components/Tools";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProjectContainer/>
      <TechSkills/>
      <Tools/>
    </div>
  );
}

export default App;
