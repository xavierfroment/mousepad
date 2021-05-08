import React, { useContext, useEffect, useState } from 'react'
import { FaCartPlus, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DataContext } from '../data/DataProvider'
import { toast } from 'react-toastify';

function Cart() {

  const value = useContext(DataContext)
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0)

  // -> function to get the final total price
  useEffect(() => {
    const getTotal =() => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.count)
      },0)
      setTotal(res)
    }
    getTotal()
  },[cart])

  // -> decrease quantity variable
  const reduction = id => {
    cart.forEach(item => {
      if(item._id === id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    })
    setCart([...cart])
  }

  // -> increase quantity variable
  const increase = id => {
    cart.forEach(item => {
      if(item._id === id) {
        item.count +=1 ;
      }
    })
    setCart([...cart])
  }

  // -> remove item from the cart
  const removeProduct = id => {
    cart.forEach((item, index) => {
      if(item._id === id) {
        cart.splice(index, 1)
        item.count = 1
      }
    })
    setCart([...cart])
    toast.info('Elément retiré de votre panier')
  }

  // -> render
  return (
    <div className="container">
      <h1>Panier</h1>
      <br/>
      {cart.length === 0 ? (
        <>
          <div className="card shadow-sm mb-3 text-center">
            <h2>Il semblerait que votre panier soit vide</h2>
            <br/>
            <div className="text-center mx-auto" >
              <FaShoppingCart size={60}/>
            </div>
            <br/>
            <Link to="/products">
              <button className="btn btn-primary btn-lg mb-3"><FaCartPlus/> Ajouter des produits</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {cart.map(product => (
            <div 
              className="card shadow-sm mb-3" 
              key={product._id}
            >
              <div className="row no-gutters">
                <div className="col-md-2 my-auto">
                  <img 
                    className="d-block w-100" 
                    src={product.img[0]} 
                    alt={product.alt[0]}/>
                </div>
                <div className="col-md-4 bg-light text-center">
                  <div className="mt-2">
                    <h6>Désignation</h6>
                  </div>
                  <div className="mb-2">
                    <h5>{product.name}</h5>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <div className="mt-2">
                    <h6>Quantité</h6>
                  </div>
                  <div className="mb-2">
                    <button 
                      className="btn btn-primary btn-sm" 
                      onClick={() => reduction(product._id)}
                    > - </button>
                    <span>  {product.count}  </span>
                    <button 
                      className="btn btn-primary btn-sm" 
                      onClick={() => increase(product._id)}
                    > + </button>
                  </div>
                </div>
                <div className="col-md-2 bg-light text-center">
                  <div className="mt-2">
                    <h6>Prix</h6>
                  </div>
                  <div className="mb-2">
                    <h5>{product.price}€</h5>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <div className="mt-2">
                    <h6>Supprimer</h6>
                  </div>
                  <div className="mb-2">
                    <FaTrash 
                      size={30} 
                      onClick={()=> removeProduct(product._id)}
                      className="text-danger"
                    /> 
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row no-gutters">
            <div className="col-md-8"/>
            <div className="col-md-2 text-center mb-3">
              <h3>Total: {total}€</h3>
            </div>
            <div className="col-md-2 text-center mb-3">
              {/* <Link to="/payment">
                <button className="btn btn-primary btn-lg">Payer</button>
              </Link> */}
            </div>
          </div><br/>
        </>
      )}
    </div>
  )
}

export default Cart