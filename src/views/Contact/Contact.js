import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import FormContact from "../../components/FormContact/FormContact";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import FormikContactForm from "../../components/FormikContactForm/FormikConatctForm";
const Contact = () => {
  return (
    <>
      <Navbar />
      <GoogleMap />
      <FormikContactForm />
      {/* <FormContact /> */}
    </>
  );
};
export default Contact;
