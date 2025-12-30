import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-inner-image-zoom/lib/styles.min.css';
import 'react-range-slider-input/dist/style.css';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { createContext, useMemo, useState } from "react";
import { Products, States } from "./data/data";
import LocationDropdown from "./components/LocationDropdown";
import ProductDetails from "./pages/ProductDetails";

export const AppContext = createContext()

function App () {
  const [selectedLocation, setSelectedLocation] = useState("Delhi");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStates  = useMemo(() => {
      if(!searchQuery) return States;
      return States.filter((state) => state.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery])

  const values = {
    selectedLocation,
    setSelectedLocation,
    isOpenModal,
    setIsOpenModal,
    filteredStates,
    searchQuery, 
    setSearchQuery,
    Products,
  }

  return (
    <BrowserRouter>
      <AppContext.Provider value={values}>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/category/:id' exact={true} element={<Shop />} />
        <Route path='/product/:id' exact={true} element={<ProductDetails />} />
        <Route path='/cart' exact={true} element={<Cart />} />
      </Routes>
      <Footer />
      {isOpenModal === true && <LocationDropdown />}
      </AppContext.Provider>
    </BrowserRouter>
    
  )
}

export default App