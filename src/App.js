import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Home from './containers/home';
import Contact from './containers/contact';
import Skills from './containers/skills';
import About from './containers/about';
import Navbar from './components/navBar';

function App() {

  const location = useLocation();
  console.log(location);
 
  const handleInit = async (main) => {

    await loadFull(main);
  }

  const renderParticleJsInHomePage = location.pathname === '/';



  return (
    <div className="App">
      {/*particles js */}
      {/*  <Particles id='particles' options={particles} init={handleInit} /> */}
      

      {/*navbar */}
      <Navbar/>


      {/* main page content */}
      <div className='App__main-page-content'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
