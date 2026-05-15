import { useState } from 'react';
import Menu from './components/Menu';
import './App.css'
import Home from './components/Home';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Menu />
      <Home />
      <Projects />
      <div></div>
    </>
  )
}

export default App
