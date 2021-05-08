import React, { useContext, useEffect, useState } from 'react'
import Categories from './Categories'
import { FaCartPlus, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { DataContext } from '../data/DataProvider'
import './ProductsList.css'

function ProductsList() {
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

  // -> sort by categories
  const [activeCategory, setActiveCategory] = useState('')
	const categorie = products.reduce(
		(acc, elem) =>
			acc.includes(elem.categorie) ? acc : acc.concat(elem.categorie),
		[]
	)

  // -> sort by availability
  const [activeDisponible, setActiveDisponible] = useState(false);
  useEffect(() => {
    if(products.dispo) {
      setActiveDisponible(false)
    } else {
      setActiveDisponible(true)
    }
  },[products.dispo]);

  // -> render
  return (
    <div className="container">
      <h1>Nos produits</h1>
      <br/>
      <div className="row mb-3">

        {/* -> sort by categories selector */}
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <Categories
            categorie={categorie}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        </div>

        {/* -> sort by availability checkbox */}
        <div className="col-sm-12 col-md-6 col-lg-6 my-auto mb-3">
          <div className="custom-control custom-switch">
            <input 
              type="checkbox"
              onChange={()=> setActiveDisponible(!activeDisponible)}
              className="custom-control-input" 
              id="customSwitch1"
            />
            {activeDisponible ? (
              <label 
                className="custom-control-label" 
                htmlFor="customSwitch1"
              >Afficher les disponibles seulement</label>
            ) : (
              <label 
                className="custom-control-label" 
                htmlFor="customSwitch1"
              >Afficher tous les produits</label>
            )}
          </div>
        </div>
      </div>

      {/* -> mapping list of products */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => 
          (!activeCategory || activeCategory === product.categorie) && (activeDisponible || !activeDisponible === product.dispo) ? (
            <div className="col mb-3" key={product._id}>
              <div 
                className={product.dispo ? ("card border border-warning shadow-sm") : ("card border border-secondary shadow-sm") }
                style={{minHeight:"450px"}}
              >
                <span className={product.dispo ? ("corner-price") : ("corner-priceno")}>{product.price}€</span>
                <img 
                  src={product.img[0]} 
                  alt={product.alt[0]} 
                  className="card-img-top m-auto" 
                />
                {product.dispo ? ( 
                  <div className="text-center price">Disponible</div>
                ) : (
                  <div className="text-center priceno">Indisponible</div> 
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="text-center">
                    <Link to={`/article/${product._id}`}>
                      <button className="btn btn-primary mx-3"><FaSearch/> Détails</button>
                    </Link>
                    {product.dispo ? (
                      <button className="btn btn-warning" onClick={() => addCart(product._id)}><FaCartPlus/> Ajouter</button>
                    ) : (
                      <button className="btn btn-secondary" disabled><FaCartPlus/> Ajouter</button> 
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
      <br/>
    </div>
  )
}

export default ProductsList
