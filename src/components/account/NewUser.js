import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { FaArrowLeft, FaCheck, FaEye, FaEyeSlash, FaInfoCircle, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import * as Yup from 'yup'
import ModalPassword from './ModalPassword'

// Errors management with Yup
const signInSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Prénom trop court')
    .max(50, 'Prénom trop long')
    .required('Remplissez ce champ'),
  lastName: Yup.string()
    .min(2, 'Nom trop court')
    .max(50, 'Nom trop long')
    .required('Remplissez ce champ'),
  myEmail: Yup.string()
    .email('Email non valide')
    .required('Remplissez ce champ'),
  address: Yup.string()
    .min(2, 'Adresse trop courte')
    .max(100, 'Adresse trop longue')
    .required('Remplissez ce champ'),
  zip: Yup.string()
    .min(2, 'Code postal trop court')
    .max(6, 'Code postal trop long')
    .required('Remplissez ce champ'),
  city: Yup.string()
    .min(2, 'Nom de ville trop court')
    .max(70, 'Nom de ville trop long')
    .required('Remplissez ce champ'),
  myNickname: Yup.string()
    .min(2, 'Pseudo trop court')
    .max(50, 'Pseudo trop long')
    .required('Remplissez ce champ'),
  myPassword: Yup.string()
    .min(8, 'Minimum 8 caractères')
    .max(25, 'Maximum 25 caractères')
    .required('Remplissez ce champ')
    .matches(/(?=^.{8,25}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "Format non valide"), // Regex for password
  confirmPassword: Yup.string()
    .required("Remplissez ce champ")
    .oneOf([Yup.ref('myPassword'), null], "Le mot de passe doit être identique")
})

const NewUser = () => {
  // State hooks
  const [showPwd, setShowPwd] = useState(false)
  const [showConfPwd, setShowConfPwd] = useState(false)
  const [modalShow, setModalShow] = React.useState(false);

  // Function and hook for go back in the previous page
  const navigate = useNavigate();

  function goBackHandle() {
    navigate("/account");
  }

  // Const to hide and see password and confirm password
  const toggleShowPwd = () => {
    setShowPwd(!showPwd)
  }
  const toggleShowConfPwd = () => {
    setShowConfPwd(!showConfPwd)
  }
 
  // Rendering
  return (
    <div className="container">
      <h1>Compte</h1>
      <br/>
      <button type="button" className="btn btn-primary btn-lg" onClick={goBackHandle}><FaArrowLeft/> Retour</button>
      <br/>
      <br/>
      <div className="card border border-primary shadow-sm">
        <div className="text-center">
          <h3>Inscription</h3>
        </div>
        <br/>
        <Formik
          // initializing the values 
          initialValues={{
            firstName:'',
            lastName:'',
            myEmail:'',
            address:'',
            zip:'',
            city:'',
            myNickname:'',
            myPassword:'',
            confirmPassword:''
          }}
          // Calling errors checked by Yup
          validationSchema={signInSchema}
          // What the application will do after submitting
          onSubmit={(values, actions) => {
            console.log(values);
            setTimeout(() => {
              actions.setSubmitting(false);
              window.location.href = "/"
            }, 1000);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="m-3">
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <div>Prénom</div>
                  {/* ----> Input field <---- */}
                  <Field name="firstName" className="form-control"/>
                  {/* ----> Error message <---- */}
                  {errors.firstName && touched.firstName ? (
                    <small className="text-danger">{errors.firstName}</small>
                  ) : null}
                </div>

                <div className="col-md-6 mb-3">
                  <div>Nom</div>
                  {/* ----> Input field <---- */}
                  <Field name="lastName" className="form-control"/>
                  {/* ----> Error message <---- */}
                  {errors.lastName && touched.lastName ? (
                    <small className="text-danger">{errors.lastName}</small>
                  ) : null}
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <div>Adresse postale</div>
                  {/* ----> Input field <---- */}
                  <Field name="address" className="form-control"/>
                  {/* ----> Error message <---- */}
                  {errors.address && touched.address ? (
                    <small className="text-danger">{errors.address}</small>
                  ) : null}
                </div>

                <div className="col-md-3 mb-3">
                  <div>Code postal</div>
                  {/* ----> Input field */}
                  <Field name="zip" className="form-control"/>
                  {/* ----> Error message <---- */}
                  {errors.zip && touched.zip ? (
                    <small className="text-danger">{errors.zip}</small>
                  ) : null}
                </div>

                <div className="col-md-3 mb-3">
                  <div>Ville</div>
                  {/* ----> Input field <---- */}
                  <Field name="city" className="form-control"/>
                  {/* ----> Error message <---- */}
                  {errors.city && touched.city ? (
                    <small className="text-danger">{errors.city}</small>
                  ) : null}
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <div>Votre pseudo</div>
                  {/* ----> Input field <---- */}
                  <Field name="myNickname" className="form-control"/>
                  {/* ----> Error message <---- */}
                  {errors.myNickname && touched.myNickname ? (
                    <small className="text-danger">{errors.myNickname}</small>
                  ) : null}
                </div>

                <div className="col-md-6 mb-3">
                  <div>Votre email</div>
                  {/* ----> Input field <---- */}
                  <Field name="myEmail" type="email" className="form-control"/>
                  {/* ----> Error message <---- */}
                  {errors.myEmail && touched.myEmail ? (
                    <small className="text-danger">{errors.myEmail}</small>
                  ) : null}
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <div>Mot de passe <FaInfoCircle onClick={() => setModalShow(true)} style={{cursor: "pointer"}}/></div>
                  <div className="input-group">
                    {/* ----> See and hide password <---- */}
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-light">
                        <span onClick={toggleShowPwd} style={{cursor: "pointer"}}>{showPwd ? <FaEyeSlash/> : <FaEye/>}</span>
                      </div>
                    </div>
                    {/* ----> Input field <---- */}
                    <Field name="myPassword" className="form-control" type={showPwd ? "text" : "password" }/>
                  </div>
                  {/* ----> Error message <---- */}
                  {errors.myPassword && touched.myPassword ? (
                    <small className="text-danger">{errors.myPassword}</small>
                  ) : null}
                </div>

                <div className="col-md-6 mb-3">
                  <div>Confirmer mot de passe</div>
                  <div className="input-group">
                    {/* ----> See and hide confirmation password <---- */}
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-light">
                        <span onClick={toggleShowConfPwd} style={{cursor: "pointer"}}>{showConfPwd ? <FaEyeSlash /> : <FaEye/> }</span>
                      </div>
                    </div>
                    {/* ----> Input field <---- */}
                    <Field name="confirmPassword" className="form-control" type={showConfPwd ? "text" : "password" }/>
                  </div>
                  {/* ----> Error message <---- */}
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <small className="text-danger">{errors.confirmPassword}</small>
                  ) : null}
                </div>
              </div>
              <br/>
              {/* ----> Submit and cancel buttons. If you submit, the submit button will be disabled <---- */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                  <FaCheck/>  Valider
                </button>
                <button type="reset" className="btn btn-secondary btn-lg ml-3">
                  <FaTimes/> Annuler
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="text-center">
        <small className="text-danger">Vos données ne seront pas envoyées vers un site tiers. Le présent site est une démo ne contenant aucune base de données.</small>
      </div>
      <br/>
      {/* ----> Call Modal <---- */}
      <ModalPassword 
        show={modalShow}
        onHide={() => setModalShow(false)
      }/>
    </div>
  )
}
export default NewUser