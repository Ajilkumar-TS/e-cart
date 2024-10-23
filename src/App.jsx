import './App.css'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer '
import { Route, Routes } from 'react-router-dom'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
