import { useState } from 'react'
import './App.css'
// import Route and Routes 
import { Route, Routes } from 'react-router-dom';
// import my page components
import About from './pages/About';
import Home from './pages/Home';
import NasaList from './pages/NasaList'
// import my components
import Nav from './components/Nav';

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/nasalist' element={<NasaList/>} />
      <Route path='/about' element={<About/>} />

    </Routes>
    </>
  )
}

export default App
