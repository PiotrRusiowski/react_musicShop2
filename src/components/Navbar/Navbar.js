import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import RootContext from "../../context/context";
import Cart from "../Cart/Cart";
import cartIcon from "../../assets/icons/cartIcon.svg";

const Navbar = () => {
  const context = useContext(RootContext);
  const { handleCartOpen, cartCounter } = context;

  return (
    <ul className="navbar_wrapper">
      <li className="navbar_element">
        <Link to="/" className="navbar_link">
          Home
        </Link>
      </li>
      <li className="navbar_element">
        <Link to="/about" className="navbar_link">
          About
        </Link>
      </li>
      <li className="navbar_element">
        <Link to="/contact" className="navbar_link">
          Contact
        </Link>
      </li>
      <li className="navbar_element">
        <Link to="/products" className="navbar_link">
          Products
        </Link>
      </li>
      <li>
        <button className="nav__card" onClick={handleCartOpen}>
          <img src={cartIcon} alt="cart" className="nav__card__img" />
          <p className="cartCouter">{cartCounter}</p>
        </button>
      </li>

      <Cart />
    </ul>
  );
};
export default Navbar;
