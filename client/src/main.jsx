import React from 'react'
import ReactDOM from 'react-dom/client'
// import Provider from 'react-redux'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

      <BrowserRouter>
        <App />
      </BrowserRouter>

);
