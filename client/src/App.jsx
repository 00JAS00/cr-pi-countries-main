// ! Dependencias 
import { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// *Components

import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'

// * Views

import Landing from './views/Landing/Landing'
import Form from './views/Form/Form'
function App() {


  return (
    <>
    <h2>app</h2>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Cards />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
