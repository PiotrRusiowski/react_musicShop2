import React, { useContext } from "react";
import "./Product.css";
import RootContext from "../../context/context";
import { Link } from "react-router-dom";

const Product = ({ name, desc, image, price }) => {
  const context = useContext(RootContext);
  const { addToCart, increaseCartCounter, handleDuplicateInCart } = context;

  return (
    <>
      <h1 className="product_title">{name}</h1>
      <h3 className="product_price">{price}$</h3>
      <Link
        to={{
          pathname: `/products/${name}`,
          state: {
            name: name,
            desc: desc,
            image: image,
          },
        }}
      >
        <img className="product_img" src={image} alt="" />
      </Link>

      <p className="product_desc">{desc}</p>
      <button
        onClick={() => {
          handleDuplicateInCart(name);
          addToCart(name);
          increaseCartCounter();
        }}
        className="addToCart_btn"
      >
        Add to cart
      </button>
    </>
  );
};
export default Product;
