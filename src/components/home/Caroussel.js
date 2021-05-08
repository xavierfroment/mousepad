import React, { useContext } from 'react'
import { Carousel } from 'react-bootstrap'
import { DataContext } from '../data/DataProvider'
import './Caroussel.css'

const Caroussel = () => {

  const value = useContext(DataContext)
  const [products] = value.products

  return (
    <>
      <h3>Nos produits les plus vendus</h3>
      <br/>
      <Carousel>
        <Carousel.Item>
          <div className="image-car">
            <img
              className="d-block w-100"
              src={products[0].img[0]}
              alt={products[0].alt[0]}
            />
          </div>
          <Carousel.Caption>
            <h3>{products[0].name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-car">
            <img
              className="d-block w-100"
              src={products[11].img[0]}
              alt={products[11].alt[0]}
            />
          </div>
          <Carousel.Caption>
            <h3>{products[11].name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-car">
            <img
              className="d-block w-100"
              src={products[20].img[0]}
              alt={products[20].alt[0]}
            />
          </div>
          <Carousel.Caption>
            <h3>{products[20].name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/>
    </>

  )
}
export default Caroussel