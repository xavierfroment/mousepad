import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { DataProvider } from '../data/DataProvider'
// System
import Error from './Error'
import Menu from './Menu'
// Home
import Home from '../home/Home'
// About
import About from '../about/About'
// Products
import ProductsList from '../shop/ProductsList'
import ProductDetail from '../shop/ProductDetail'
// Contact
import Contact from '../contact/Contact'
// User account
import Account from '../account/Account'
import NewUser from '../account/NewUser'
// Cart
import Cart from '../cart/Cart'

function RoutePaths() {
  return (
    <DataProvider>
      <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />         
          <Route exact path="/products" element={<ProductsList/>} />  
          <Route path="/article/:id" element={<ProductDetail/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/account" element={<Account/>} />
          <Route exact path="/newuser" element={<NewUser/>} />
          <Route exact path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </DataProvider>
  )
}

export default RoutePaths
