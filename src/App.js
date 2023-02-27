import './App.css';
import "./index.js"
// "homepage": "https://jayeshbakleportfolio.com",
// "homepage":"https://jayesh-bakle.github.io/portfolio-jayeshbaklegithub.io.git",
import Home from "./routes/Home"
import Project from "./routes/Project"
import About from './routes/About';
import Contact from "./routes/Contact"

import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
