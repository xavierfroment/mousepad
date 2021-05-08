import React from 'react'
import Caroussel from './Caroussel'
import Disclamer from './Disclamer'

function Home() {
  return (
    <div className="container">
      <h1>Bienvenue sur MousePAD</h1>
      <br/>
      <Caroussel/>
      <Disclamer/>
    </div>
  )
}

export default Home