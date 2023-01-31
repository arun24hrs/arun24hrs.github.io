import "./App.css";
import GithubStats from "./Components/GithubStats";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

import Navbar from "./Components/Navbar";
import ProjectContainer from "./Components/ProjectContainer";
import TechSkills from "./Components/TechSkills";
import Tools from "./Components/Tools";



function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Navbar />
      <Header />
      <ProjectContainer/>
      <GithubStats/>
      <TechSkills/>
      <Tools/>
    </div>
  );
}

export default App;
