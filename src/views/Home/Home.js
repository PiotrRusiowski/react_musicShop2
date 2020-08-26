import React, { useContext } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import RootContext from "../../context/context";
import phone from "../../assets/icons/footer/phone.svg";
import fb from "../../assets/icons/footer/facebook.svg";
import email from "../../assets/icons/footer/email.svg";

const Home = () => {
  const context = useContext(RootContext);
  return (
    <>
      <Navbar />
      <div className="baner">
        <img src={context.banerImg} alt="audio" className="baner-img" />
        <div className="baner__item">
          <h1 className="baner__item-title">Tech.Music</h1>
          <h3 className="baner__itmem-titleSmall">authorized shop</h3>
          <button className="baner__item-btn">Products</button>
        </div>
        <div className="footer container">
          <div className="footer__item">
            <img src={phone} alt="" className="footer__item-img" />
            <a href="#" className="footer__item-content">
              (022)123-456-123
            </a>
          </div>
          <div className="footer__item">
            <img src={email} alt="" className="footer__item-img" />
            <a href="#" className="footer__item-content">
              musicshop122@gmail.com
            </a>
          </div>
          <div className="footer__item">
            <img src={fb} alt="" className="footer__item-img" />
            <a href="#" className="footer__item-content"></a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
