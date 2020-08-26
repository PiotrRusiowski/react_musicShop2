import React from "react";
import "./FormContact.css";

const FormContact = () => {
  return (
    <div className="container">
      <div className="formContact">
        <form action="" className="form">
          <h1 className="form__title">Contact</h1>
          <div className="form__input-wrapper">
            <input type="text" placeholder="Title" className="form__input" />
            <input type="text" placeholder="e-mail" className="form__input" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="form__textArea"
          ></textarea>
          <button className="form__btn">Send</button>
        </form>
        <div className="formDesc">
          {/* <strong>To order:</strong> */}
          <h3 className="toOrder">To order:</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Accusamus totam quibusdam inventore. Doloribus recusandae eum
            consectetur quae unde quod <br /> blanditiis.oasdoho soidhao
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
        </div>
      </div>
    </div>
  );
};
export default FormContact;
