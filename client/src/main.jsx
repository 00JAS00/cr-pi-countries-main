import ReactDOM from 'react-dom/client'
// * Redux
// * Redux
import { Provider } from 'react-redux'
import store from './Redux/Store/Store'
// import Provider from 'react-redux'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

);
