import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Navbar from "./Components/Navbar";
import ProjectCard from "./Components/ProjectCard";
import ProjectContainer from "./Components/ProjectContainer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      
      <ProjectContainer/>
    </div>
  );
}

export default App;
