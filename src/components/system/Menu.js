import React, { useContext } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../data/DataProvider'
import './Menu.css'

function Menu() {

  const value = useContext(DataContext)
  const [cart] = value.cart

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top" className="shadow-sm">
        <Navbar.Brand>MousePAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-center">
            <NavLink className="nav-link menu-hover" to="/" end>Accueil</NavLink>
            <NavLink className="nav-link menu-hover" to="/about">A propos</NavLink>       
            <NavLink className="nav-link menu-hover" to="/products">Produits</NavLink>
            <NavLink className="nav-link menu-hover" to="/contact">Contact</NavLink>            
          </Nav>
          <Nav className="ml-auto text-center">
            <NavLink className="nav-link menu-hover" to="/account">Compte</NavLink>  
            <NavLink className="nav-link menu-hover" to="/cart">Panier {cart.length > 0 && (<span className="badge badge-danger">{cart.length}</span>)}</NavLink>  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu