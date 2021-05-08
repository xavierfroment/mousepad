import React, { useState }  from 'react'
import { Field, Form, Formik } from 'formik';
import { FaEye, FaEyeSlash, FaLock, FaPaperPlane, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import * as Yup from 'yup'

// Errors management with Yup
const loginSchema = Yup.object().shape({
  myNickname: Yup.string().required('Remplissez ce champ'),
  myPassword: Yup.string().required('Remplissez ce champ')
});

function Account() {
  // Hook state and function to hide and see password
  const [showPwd, setShowPwd] = useState(false)
  const toggleShowPwd = () => {
    setShowPwd(!showPwd)
  }

  return (
    <div className="container">
      <h1>Compte</h1>
      <br/>
      <div className="card  border border-primary col-lg-4 col-md-6 col-sm-12 m-auto shadow-sm">
        <div className="text-center">
          <h3>Connexion</h3>
        </div>
        <br/>
        <Formik
          // initializing the values 
          initialValues={{
            myNickname:'',
            myPassword:''
          }}
          // Calling errors checked by Yup
          validationSchema={loginSchema}
          // What the application will do after submitting
          onSubmit={(values, actions) => {
            console.log(values)
            setTimeout(() => {
              actions.setSubmitting(false);
              window.location.href = "/"
            }, 1000);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <div>Pseudo</div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-light"><FaUser/></div>
                  </div>
                  {/* ----> Input field <---- */}
                  <Field name="myNickname" className="form-control"/>
                </div>
                {/* ----> Error message <---- */}
                {errors.myNickname && touched.myNickname ? (<small className="text-danger">{errors.myNickname}</small>) : null}
              </div>
              <div className="form-group">
                <div>Mot de passe</div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-light"><FaLock/></div>
                  </div>
                  {/* ----> Input field <---- */}
                  <Field type={showPwd ? "text" : "password" } name="myPassword" className="form-control"/>
                  <div className="input-group-append">
                    <div className="input-group-text bg-light"><span onClick={toggleShowPwd} style={{cursor: "pointer"}}>{showPwd ? <FaEyeSlash/> : <FaEye/>}</span></div>
                  </div>
                </div>
                {/* ----> Error message <---- */}
                {errors.myPassword && touched.myPassword ? (<small className="text-danger">{errors.myPassword}</small>) : null}
              </div>
              <br/>
              <div className="text-center">
                {/* ----> Submit button <---- */}
                <button type="submit" className="btn btn-primary btn-lg"><FaPaperPlane/>  Valider</button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center mb-3">
          <Link to="/newuser">
            <small>Pas de compte ? Inscrivez-vous</small>
          </Link>
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  )
}

export default Account