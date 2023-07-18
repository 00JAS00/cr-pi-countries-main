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
import axios from 'axios'
import { useLocation } from 'react-router-dom'
function App() {
  const { pathname } = useLocation()
  return (
    <div className="App">
        <header>
            {pathname !== '/' && <Nav />}
        </header>
        <main>
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/home" element={<Cards />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/form" element={<Form />} />
            </Routes>
        </main>
        {pathname !== '/' && <footer>
              Footer
        </footer>}
    </div>
  )
}

export default App;
