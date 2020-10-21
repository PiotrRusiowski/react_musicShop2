import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./FormikConatctForm.css";
import Button from "../../components/styledComponents/Button";
import Title from "../../components/styledComponents/Title";
import Fade from "react-reveal/Fade";
import {
  StyledFormContact,
  StyledForm,
  StyledFormWrapper,
  StyledFormInputWrapper,
  StyledError,
  StyledformInputError,
  StyledField,
  StyledTextArea,
  StyledFormDesc,
} from "./StyledFormikConatctForm";

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Twój mail jest niepoprawny")
    .required("Wpisz maila zanim wyślesz"),
  message: Yup.string().required("Napisz wiadomość zanim wyślesz"),
  akceptCheckBox: Yup.bool().oneOf(
    [true],
    "Musisz zaakceptować politykę prywatności"
  ),
  subject: Yup.string().required("Napisz wiadomość zanim wyślesz"),
});

const FormikConatctForm = () => {
  const [isSubjectError, setSubjectError] = useState(false);
  const [isMessageError, setMessageError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);

  return (
    <div className="container2">
      <StyledFormContact mobile>
        <Formik
          initialValues={{
            subject: "",
            email: "",
            message: "",
            akceptCheckBox: false,
          }}
          validationSchema={contactFormSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => {
            const validationInputsBorderColorChange = () => {
              if (values.email === "") {
                setEmailError(true);
              } else {
                setEmailError(false);
              }

              if (values.message === "") {
                setMessageError(true);
              } else {
                setMessageError(false);
              }

              if (values.subject === "") {
                setSubjectError(true);
              } else {
                setSubjectError(false);
              }
            };

            return (
              <StyledForm>
                <Title>Contact</Title>

                <StyledFormWrapper mobile>
                  <StyledFormInputWrapper mobile>
                    <StyledField
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="subject"
                      isError={isSubjectError}
                    />

                    <StyledError>
                      <ErrorMessage name="subject" />
                    </StyledError>
                  </StyledFormInputWrapper>

                  <StyledFormInputWrapper>
                    <StyledField
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      value={values.email}
                      isError={isEmailError}
                    />
                    <StyledError>
                      <ErrorMessage name="email" />
                    </StyledError>
                  </StyledFormInputWrapper>
                </StyledFormWrapper>

                <StyledFormInputWrapper>
                  <StyledTextArea
                    name="message"
                    id="message"
                    placeholder="message"
                    value={values.message}
                    component="textarea"
                    isError={isMessageError}
                  />

                  <StyledError>
                    <ErrorMessage name="message" />
                  </StyledError>
                </StyledFormInputWrapper>

                <StyledFormInputWrapper>
                  <div>
                    <Field
                      name="akceptCheckBox"
                      id="akceptCheckBox"
                      type="checkbox"
                    />
                    <label htmlFor="akceptCheckBox">Privacy policy</label>
                  </div>
                  <div className=" CheckBoxError">
                    <ErrorMessage name="akceptCheckBox" />
                  </div>
                </StyledFormInputWrapper>
                <Fade left>
                  <Button
                    small
                    type="submit"
                    onClick={validationInputsBorderColorChange}
                  >
                    wyślij
                  </Button>
                </Fade>
              </StyledForm>
            );
          }}
        </Formik>
        <StyledFormDesc>
          <h3 className="toOrder">To order:</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Accusamus totam quibusdam inventore. Doloribus recusandae eum
            consectetur quae unde quod <br /> blanditiis.oasdoho soidhaodasdasd
          </p>

          <p>
            <strong>Adress: </strong>
            Tech music shop
            <br />
            ul:Woronicza 17
            <br /> 02-122 Warszawa
          </p>

          <p>
            <strong>Phones: </strong>(048)123-123-132, 0123123131
          </p>

          <p>
            <strong>Open: </strong>9:00-19:00
          </p>
        </StyledFormDesc>
      </StyledFormContact>
    </div>
  );
};
export default FormikConatctForm;
