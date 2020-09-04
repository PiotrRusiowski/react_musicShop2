import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
import arrowIcon from "../../assets/icons/back.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 100,
    width: 100,
  },
});

const SingleProduct = (props) => {
  const { name, desc, image, price } = props.location.state;
  return (
    <div className="singleProduct">
      <div className="singleProduct__wrapper">
        <div className="singleProduct__wrapper1">
          <h1 className="product_title">{name}</h1>
          <img src={image} alt="singleProduct" className="singleProduct__img" />
        </div>
        <div className="line"></div>
        <div className="singleProduct__wrapper2">
          <p className="singleProduct__desc">{desc}</p>
          <p className="singleProduct__price">
            <strong>Price: </strong>
            {price}$
          </p>
          <Link to="/products" className="goBackLink">
            <button className="goBackLink__btn">
              <img src={arrowIcon} alt="go back" className="goBackLink__link" />
            </button>
            <p className="goBackLink__text">Back to products</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
