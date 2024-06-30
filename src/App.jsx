import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import './App.scss'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  )
}

export default App
