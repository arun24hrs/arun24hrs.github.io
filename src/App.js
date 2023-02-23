import "./App.css";
import Contact from "./Components/Contact";
import GithubStats from "./Components/GithubStats";
import Header from "./Components/About";
import Nav from "./Components/Nav";

import Navbar from "./Components/Navbar";
import ProjectContainer from "./Components/ProjectContainer";
import TechSkills from "./Components/TechSkills";
import Tools from "./Components/Tools";



function App() {
  return (
    <div className="App" id="home">
      <Nav/>
      {/* <Navbar /> */}
      <Header />
      <ProjectContainer/>
      <GithubStats/>
      <TechSkills/>
      <Tools/>
      <Contact/>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
