import React from 'react';
import './App.css';
import Header from '../../menu-deneme/src/components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import İnfo from './components/about/İnfo';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from '../../menu-deneme/src/components/scrollup/ScrollUp';


const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Services />
    </main>
    {/* <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />      
    </main> 

    <Footer />*/}
    <ScrollUp />
    </>
  )
}

export default App
