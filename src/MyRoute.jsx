import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Pages/Home'
import Login from './components/Pages/login'
import Register from './components/Pages/Register'
import Cart from './components/Pages/Cart'
import Services from './components/Pages/Services'
import Contact from './components/Pages/Contact'
import Products from './components/Pages/Products'
const MyRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Services' element={<Services/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Products' element={<Products/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoute