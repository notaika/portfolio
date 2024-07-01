import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.scss'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
    </>
  )
}

export default App
