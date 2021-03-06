import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../../context/context";
import PaypalButton from "../PayPalButton/PayPalButton";
import {
  StyledCartListElementImg,
  StyledCartListElementName,
  StyledCartListElementPrice,
  StyledBtnGroup,
  StyledCartListElement,
  StyledCartList,
} from "./CardStyledComponents";

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

    "@media(max-width: 1025px)": {
      width: "60vw",
    },

    "@media(max-width: 424px)": {
      width: "90vw",
      margin: "auto",
    },
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
            <StyledCartList>
              {cart.map((product) => {
                return (
                  <StyledCartListElement>
                    <StyledCartListElementImg src={product.productImage} />

                    <StyledCartListElementName>
                      {product.productName}
                    </StyledCartListElementName>
                    <StyledCartListElementPrice>
                      {product.productPrice}$
                    </StyledCartListElementPrice>
                    <StyledBtnGroup>
                      <button
                        onClick={() =>
                          decreseProductQuantity(product.productName)
                        }
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
                        onClick={() => {
                          removeProductFromCart(
                            product.productName,
                            product.productQuantity
                          );
                        }}
                      >
                        X
                      </button>
                    </StyledBtnGroup>
                  </StyledCartListElement>
                );
              })}
            </StyledCartList>

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
