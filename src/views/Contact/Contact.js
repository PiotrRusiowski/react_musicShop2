import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FormContact from "../../components/FormContact/FormContact";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
const Contact = () => {
  return (
    <>
      <Navbar />
      <GoogleMap />
      <FormContact />
    </>
  );
};
export default Contact;
