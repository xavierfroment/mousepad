import React from 'react'
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/")
  }, 3000);

  return (
    <div className="container">
      <h1>Erreur 404 ! </h1>
      <br/>
      <p>Il semblerait que vous vous soyez perdu. Vous allez être redirigé vers l'accueil dans quelques instants. Bonne visite.</p>
    </div>
  )
}

export default Error