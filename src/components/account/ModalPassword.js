import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalPassword(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mode d'emploi pour votre mot de passe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          <li>
            Votre mot de passe doit contenir :
            <ul>
              <li>Au moins 8 caractères</li>
              <li>Pas plus de 25 caractères</li>
              <li>Au moins une lettre en majuscule</li>
              <li>Au moins un chiffre</li>
              <li>Au moins un caractère spécial.</li>
            </ul>
          </li>
          <li>Votre confirmation de mot de passe doit être identique à votre mot de passe.</li>
          <li>Cliquez sur le petit oeil pour voir si vous avez saisi correctement votre mot de passe.</li>
          <li>Recliquez dessus pour cacher votre mot de passe à l'abri des regards indiscrets.</li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalPassword