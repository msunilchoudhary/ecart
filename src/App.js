import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-inner-image-zoom/lib/styles.min.css';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from "./components/Footer";

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App