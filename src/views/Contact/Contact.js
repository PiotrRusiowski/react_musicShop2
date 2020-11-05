import React from "react";
// import FormContact from "../../components/FormContact/FormContact";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import FormikContactForm from "../../components/FormikContactForm/FormikConatctForm";
import Fade from "react-reveal/Fade";
const Contact = () => {
  return (
    <>
      <Fade delay={300}>
        <GoogleMap />
        <FormikContactForm />
      </Fade>

      {/* <FormContact /> */}
    </>
  );
};
export default Contact;
