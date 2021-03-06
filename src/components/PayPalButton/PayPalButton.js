import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

const PaypalButton = ({
  total,
  clearCart,
  handleCartClose,
  resetCartCounter,
}) => {
  const onSuccessPayment = (payment) => {
    console.log("The payment was succeeded", payment);

    clearCart();
    handleCartClose();
    resetCartCounter();
  };

  const onCancel = (reason) => {
    console.log("The payment was cancelled", reason);
  };

  const onError = (error) => {
    console.error("Error:", error);
  };

  let env = "sandbox";
  let currency = "USD";

  const client = {
    sandbox:
      "AYZOyc6kYf-L_lo7BHowitiYK5zAO0UxrOsK9NKBNmvQDrs95kEosHu-U2F48jAYx9ZdonDGh8kzJqk2",
    production: "YOUR-PRODUCTION-APP-ID",
  };

  return (
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccessPayment}
      onCancel={onCancel}
    />
  );
};

export default PaypalButton;
