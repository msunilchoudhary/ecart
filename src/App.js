import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App