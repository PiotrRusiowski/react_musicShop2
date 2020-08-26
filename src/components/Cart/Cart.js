import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../../context/context";
import "./Cart.css";
import PaypalButton from "../PayPalButton/PayPalButton";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "90vh",
    width: "30vw",
  },
}));

const Cart = () => {
  const classes = useStyles();

  const context = useContext(RootContext);
  const {
    handleCartClose,
    isCartOpen,
    cart,
    removeProductFromCart,
    increseProductQuantity,
    decreseProductQuantity,
    total,
    clearCart,
    resetCartCounter,
  } = context;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isCartOpen}
        onClose={handleCartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCartOpen}>
          <div className={classes.paper}>
            <ul className="cartList">
              {cart.map((product) => {
                return (
                  <li className="cartList__element">
                    <img
                      src={product.productImage}
                      alt=""
                      className="cartList__element__img"
                    />
                    <h2 className="cartList__element__name">
                      {product.productName}
                    </h2>
                    <h4 className="cartList__element__price">
                      {product.productPrice}$
                    </h4>
                    <div className="cartList__element__BtnGroup">
                      <button
                        onClick={() =>
                          decreseProductQuantity(product.productName)
                        }
                        className="cartList__element__decreaseBtn"
                      >
                        -
                      </button>
                      <h4>{product.productQuantity}</h4>
                      <button
                        onClick={() =>
                          increseProductQuantity(product.productName)
                        }
                      >
                        +
                      </button>
                      <button
                        className="cartList__element__deleteBtn"
                        onClick={() => {
                          removeProductFromCart(
                            product.productName,
                            product.productQuantity
                          );
                        }}
                      >
                        X
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            {cart.length <= 0 ? (
              ""
            ) : (
              <>
                <h5 className="totalPrice">Total: {total}$</h5>
                <PaypalButton
                  total={total}
                  clearCart={clearCart}
                  resetCartCounter={resetCartCounter}
                  handleCartClose={handleCartClose}
                />
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Cart;
