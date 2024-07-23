import Home from './pages/HomePage/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProductListing from './pages/ProductListingPage/ProductListingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageCadastro from './pages/PageCadastro/PageCadastro';
import PageLogin from './pages/pageLogin/PageLogin';




function App() {

  return (
    <Router>
    <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/produtos" element={<ProductListing/>} />
        <Route path="/produtos/:id" element={<ProductDetails />} />
        <Route path="/categorias" element={<Home />} />
        <Route path="/cadastro" element={<PageCadastro />} />
        <Route path="/login" element={<PageLogin />} />


        <Route path='*' element={<Home/>}></Route>
    </Routes>
</Router>
  )
}

export default App
