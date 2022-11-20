import React, { useState } from 'react'
import { Col, Row, InputGroup, Form, Button } from 'react-bootstrap'
import { AiFillMobile, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { BsFillBriefcaseFill, BsFillCalendarCheckFill, BsFillFileEarmarkFill } from 'react-icons/bs'
import { ReCAPTCHA } from "react-google-recaptcha"
import './hero.css'
import { Formik } from 'formik'
import * as Yup from 'yup';


const ContactForm = () => {   
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "*Names must have at least 2 characters")
      .max(100, "*Names can't be longer than 100 characters")
      .required("*Name is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "*Phone number is not valid")
      .required("*Phone number required"),
    blog: Yup.string()
      .url("*Must enter URL in http://www.example.com format")
      .required("*URL required"),
  });

  const initialValues = {
    deactivated: false,
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", phone: "", blog: "" }}
        validationSchema={validationSchema}
      >
        {({ values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
          <Form className="mx-auto" onSubmit={handleSubmit}>
            {console.log(values)}
            <InputGroup controlId="formName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "error" : null}
              />
              <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ) : null}
            </InputGroup>
            <InputGroup controlId="formEmail">
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "error" : null}
              />
              <InputGroup.Text><AiOutlineMail /></InputGroup.Text>

              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </InputGroup>

            <InputGroup controlId="formPhone">
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className={touched.phone && errors.phone ? "error" : null}
              />
              <InputGroup.Text><AiFillMobile /></InputGroup.Text>
              {touched.phone && errors.phone ? (
                <div className="error-message">{errors.phone}</div>
              ) : null}
            </InputGroup>
            <InputGroup controlId="formBlog">
              <Form.Control
                type="text"
                name="blog"
                placeholder="Blog URL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.blog}
                className={touched.blog && errors.blog ? "error" : null}
              />
              <InputGroup.Text><BsFillCalendarCheckFill /></InputGroup.Text>
              {touched.blog && errors.blog ? (
                <div className="error-message">{errors.blog}</div>
              ) : null}
            </InputGroup>
            <ReCAPTCHA
        sitekey="Your client site key"
      />
            <Button type="submit" className='submit-btn'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm