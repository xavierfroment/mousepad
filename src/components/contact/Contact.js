import React from 'react'
import { FaEdit, FaPaperPlane, FaUser } from 'react-icons/fa'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

// Errors management with Yup
const MessageSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Trop court')
    .max(50, 'Trop long!')
    .required('Remplissez ce champ'),
  email: Yup.string()
    .email('Email non valide')
    .required('Remplissez ce champ'),
  message: Yup.string()
    .min(2, 'Message trop court')
    .max(1000, 'Message trop long')
    .required('Remplissez ce champ')
});

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <br/>
      <div className="card border border-primary shadow-sm col-lg-8 col-sm-12 m-auto">
        <h3 className="text-center">Message</h3>
        <Formik
          // initializing the values 
          initialValues={{
            fullName: '',
            email: '',
            message: ''
          }}
          // Calling errors checked by Yup
          validationSchema={MessageSchema}
          // What the application will do after submitting
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log(values);
              actions.setSubmitting(false);
              actions.resetForm({
                values: {
                  fullName: '',
                  email: '',
                  message: ''  
                }
              })
            }, 1000);
          }}
        >
          {({ errors, touched }) => (
            <Form className="m-3">
              <div className="form-group">
                <div>Nom et Prénom</div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-white"><FaUser/></div>
                  </div>
                  {/* ----> Input field <---- */}
                  <Field name="fullName" className="form-control"/>
                </div>
                {/* ----> Error message <---- */}
                {errors.fullName && touched.fullName ? (
                  <small className="text-danger">{errors.fullName}</small>
                ) : null}
              </div>
              <div className="form-group">
                <div>Votre email</div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-white">@</div>
                  </div>
                  {/* ----> Input field <---- */}
                  <Field name="email" type="email" className="form-control"/>
                </div>
                {/* ----> Error message <---- */}
                {errors.email && touched.email ? (
                  <small className="text-danger">{errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <div>Votre message</div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-white"><FaEdit/></div>
                  </div>
                  {/* ----> Input field <---- */}
                  <Field name="message" component="textarea" className="form-control" row="5"/>
                  </div>
                {/* ----> Error message <---- */}
                {errors.message && touched.message ? (
                  <small className="text-danger">{errors.message}</small>
                ) : null}
              </div>
              <br/>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg"><FaPaperPlane/> Envoyer</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="text-center">
        <small className="text-danger">Le formulaire ci-dessus n'envoie aucune donnée à un site tiers, car ce site n'est qu'une démo.</small>
      </div>
    </div>
  )
}
export default Contact
