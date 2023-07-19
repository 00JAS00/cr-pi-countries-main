// ! Dependencias 
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from './Redux/Actions/Actions'
// *Components

import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'

// * Views

import Landing from './views/Landing/Landing'
import Form from './views/Form/Form'
import { useLocation } from 'react-router-dom'
function App() {
  const { pathname } = useLocation()
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])
  return (
    <div className="app bg-pan-left">
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
