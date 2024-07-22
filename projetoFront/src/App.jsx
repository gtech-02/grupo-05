import Home from './pages/HomePage/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProductListing from './pages/ProductListingPage/ProductListingPage'
import ProductView from './pages/ProductViewPage/ProductView'
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';




function App() {

  return (
    <Router>
    <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/produtos" element={<ProductListing/>} />
        <Route path="/produtos/:id" element={<ProductDetails />} />
        <Route path="/categorias" element={<Home />} />
    </Routes>
</Router>
  )
}

export default App
