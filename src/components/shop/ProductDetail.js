import React, { useContext, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import { FaArrowLeft, FaCartPlus, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../data/DataProvider';
import ImgMiniDetail from './ImgMiniDetail';
import SlideShow from './SlideShow';

function ProductDetail() {
  
  // -> dataprovider
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

  // -> check if current id targeted is equal to product id
  const {id} = useParams(); 
  const details = products.filter((product, index) => {
    return product._id === id
  })
  const [index, setIndex] = useState(0)

  // -> Description tabs const.
  const [key, setKey] = useState('desc');

  // -> goback 
  const navigate = useNavigate();

  function goBackHandle() {
    navigate("/products");
  }

  // -> render 
  return (
    <div className="container">
      {details.map(product =>(
        <div className="details" key={product._id}>
          <h1>{product.name}</h1>
          <br/>
          <div className="mb-3">
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              onClick={goBackHandle}
            ><FaArrowLeft/> Retour</button>
          </div>
          <div className={product.dispo ? ("card border border-warning shadow-sm mb-3") : ("card border border-secondary shadow-sm mb-3") }>
            <div className="row no-gutters">
              <div className="col-md-7">
                <img
                  className="d-block w-100" 
                  src={`${product.img[index]}`} 
                  alt={product.alt[index]}
                />
                {product.dispo ? ( 
                      <div className="price text-center">Disponible</div>
                    ) : (
                      <div className="priceno text-center">Indisponible</div>
                    ) 
                  }
                <div className="text-center py-2 bg-light">
                  <ImgMiniDetail 
                    img={product.img} 
                    setIndex={setIndex}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="m-3">
                  <div className="">
                    <h4>{product.name}</h4>
                  </div>
                  <p><span style={{fontWeight: "bold"}}>Description :</span> {product.description}</p>
                  <p><span style={{fontWeight: "bold"}}>Catégorie :</span> {product.categorie}</p>
                  <div className="text-center">
                    <h3>Prix: {product.price}€</h3>
                    {product.dispo ? (
                      <button className="btn btn-warning btn-lg" onClick={()=> addCart(product._id)}><FaCartPlus/> Ajouter</button>
                    ) : (
                      <button className="btn btn-secondary btn-lg" disabled><FaCartPlus/> Ajouter</button>
                    )} 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className={product.dispo ? ("card border border-warning shadow-sm mb-3") : ("card border border-secondary shadow-sm mb-3")}>    
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="desc" title="Description">
                <div className="m-3">
                  <h4>Description de {product.name}</h4>
                  <br/>
                  {product.description}
                  <br/>
                  <br/>
                  {!product.dispo && (
                    <div className="alert alert-danger">
                      <h6>Pourquoi ce produit n'est pas disponible</h6>
                      <span>Ce produit n'est pas disponible, car il est en cours de réapprovisionnement. Il sera bientôt de retour dans notre boutique. Merci de votre compréhension.</span>
                    </div> 
                  )}
                </div>
              </Tab>
              <Tab eventKey="avis" title="Avis">
                <div className="m-3">
                  <h4>Avis sur {product.name}</h4>
                  <br/>
                  <div className="row alert alert-light">
                    <div className="col-lg-3">
                      <h6>Hans</h6>
                      <div>Acheté le 22/02/2017</div>
                    </div>
                    <div className="col-lg-9">
                      <div style={{color:"#ffc107"}}>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/> 
                      </div>
                      <h6>Magnifique !</h6>
                      <span>Depuis le temps que je cherchais un tapis de souris qui me convienne, celui-ci est parfait !</span>
                    </div>
                  </div>
                  <br/>
                  <div className="row alert alert-info">
                    <div className="col-lg-3">
                      <h6>Laura</h6>
                      <div>Acheté le 23/07/2018</div>
                    </div>
                    <div className="col-lg-9">
                      <div style={{color:"#ffc107"}}>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>
                      </div>
                      <h6>Très bon tapis</h6>
                      <span>Très bonne qualité ! Ca va bien avec mon set-up en plus !</span>
                    </div>
                  </div>
                  <br/>
                  <div className="row alert alert-light">
                    <div className="col-lg-3">
                      <h6>Pascal</h6>
                      <div>Acheté le 13/03/2018</div>
                    </div>
                    <div className="col-lg-9">
                      <div style={{color:"#ffc107"}}>
                        <FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/><FaRegStar/>
                      </div>
                      <h6>Bof...</h6>
                      <span>Il y a eu beaucoup de retard dans la livraison, c'est pour ça que je mets une note si basse. Sinon le tapis en lui-même est correct.</span>
                    </div>
                  </div>
                  <br/>
                  <div className="row alert alert-info">
                    <div className="col-lg-3">
                      <h6>Béatrice</h6>
                      <div>Acheté le 28/01/2021</div>
                    </div>
                    <div className="col-lg-9">
                      <div style={{color:"#ffc107"}}>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                      </div>
                      <h6>Excellent !</h6>
                      <span>Je suis très heureuse de ce tapis, il fait exactement ce qu'on attend de lui. La qualité est excellente ! Je recommande !</span>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs> 
          </div>
        </div>
      ))}
      <br/>
      <SlideShow/>
    </div>
  )
}

export default ProductDetail
