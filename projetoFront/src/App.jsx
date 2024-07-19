import Home from './pages/HomePage/Home';
import ProductListing from './pages/ProductListingPage/ProductListing'
import ProductView from './pages/ProductViewPage/ProductView'
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';




function App() {

  return (
    <Router>
    <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/produtos" element={<ProductListing/>} />
        <Route path="/categorias" element={<ProductView />} />
        <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
</Router>
  )
}

export default App
