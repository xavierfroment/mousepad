import React, { useContext } from 'react'
import { DataContext } from '../data/DataProvider'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import Slider from 'react-slick'
import './SlideShow.css'

function SlideShow() {

  const value = useContext(DataContext)
  const [products] = value.products

  // slick slider settings, with responsive settings
  let settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 490,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Rendering
  return (
    <div>
      <h3>Vous aimerez peut-être...</h3>
      <br/>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="col" key={product._id}> 
            <div className={product.dispo ? ("card border border-warning shadow-sm") : ("card border border-secondary shadow-sm")}>
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
                  <div className="text-center">
                    <h5>{product.name}</h5>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-center">
                    <Link to={`/article/${product._id}`}>
                      <button className="btn btn-primary mx-3"><FaSearch/> Voir ce produit</button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
      <br/>
      <br/>
    </div>
  )
}

export default SlideShow
