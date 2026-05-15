import { useState } from 'react';
import Menu from './components/Menu';
import './App.css'
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Menu />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
