import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Work from './components/Work';
import {Helmet} from "react-helmet";



function App() {
  return (
    <div className='bg-[#0a192f] '> 
      <Helmet>
                <meta charSet="utf-8" />
                <title>ChamithKavinda</title>
                <meta name="description" content="chamith kavinda portfolio" />
                <link rel="canonical" href="https://chamithz.github.io/Portfolio/" />
      </Helmet>
      <NavBar/>
       <Home/>
      <About/>
      <Skills/>
      <div className='mt-28'> 
      <Work/>
      </div>
      <div className='mt-28'>
      <Contact/>
      </div>
           </div>
  );
}

export default App;
