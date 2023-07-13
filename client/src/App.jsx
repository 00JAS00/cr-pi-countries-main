import { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Nav} from './views/Nav/Nav.jsx'
function App() {

  return (
    <header>
      
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Cards />}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </main>
  )
}

export default App;
