import React, { useContext } from "react";
import "./Product.css";
import RootContext from "../../context/context";
import { Link } from "react-router-dom";

const Product = ({ name, desc, image, price }) => {
  const context = useContext(RootContext);
  const { addToCart, increaseCartCounter, handleDuplicateInCart } = context;

  return (
    <>
      <h2 className="product_title">{name}</h2>
      <h4 className="product_price">{price}$</h4>
      <Link
        to={{
          pathname: `/products/${name}`,
          state: {
            name: name,
            desc: desc,
            image: image,
            price: price,
          },
        }}
      >
        <img className="product_img" src={image} alt="" />
      </Link>

      <p className="product_desc">
        {desc.slice(0, 70)}{" "}
        <Link
          to={{
            pathname: `/products/${name}`,
            state: {
              name: name,
              desc: desc,
              image: image,
              price: price,
            },
          }}
        >
          <button className="readMore__btn">read more...</button>
        </Link>
      </p>
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
