import React, { useContext } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DataContext } from '../data/DataProvider'
import './Menu.css'

function Menu() {

  const value = useContext(DataContext)
  const [cart] = value.cart

  return (
    <>
      <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top" className="shadow-sm">
        <Navbar.Brand>MousePAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-center">
            <Nav.Item>
              <Nav.Link 
                eventKey="1" 
                as={Link} 
                className="nav-link menu-hover" 
                to="/" end="true"
              >
                Accueil
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="2" 
                as={Link} 
                className="nav-link menu-hover" 
                to="/about"
              >
                A propos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="3" 
                as={Link} 
                className="nav-link menu-hover" 
                to="/products"
              >
                Produits
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="4" 
                as={Link} 
                className="nav-link menu-hover" 
                to="/contact"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="5" 
                as={Link} 
                className="nav-link menu-hover" 
                to="/account"
              >
                Compte
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="6" 
                as={Link} 
                className="nav-link menu-hover" 
                to="/cart"
              >
                Panier {cart.length > 0 && (<span className="badge badge-danger">{cart.length}</span>)}
              </Nav.Link>
            </Nav.Item>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu