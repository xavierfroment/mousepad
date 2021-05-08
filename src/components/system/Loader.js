import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-page">
      <div className="loader-content">
        <div className="text-center text-dark">
          <h3>Chargement en cours...</h3>
          <br/>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader