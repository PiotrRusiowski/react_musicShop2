import React, { useState, useEffect } from "react";
import RootContext from "./context/context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import { productsDataArray } from "./localData/productsDataArray";
import SingleProduct from "./views/SingleProduct/SingleProduct";

const Root = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([...new Set([])]);
  const [cartCounter, setCartCounter] = useState(0);
  const [products, setProducts] = useState([...productsDataArray]);
  const [searchValue, setSearchValue] = useState("");
  const [priceValue, setPriceValue] = useState(2000);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [total, setTotal] = useState(0);
  const setMaxAndMinPrice = () => {
    let maxPrice = Math.max(...products.map((product) => product.productPrice));
    setPriceValue(maxPrice);
    console.log(maxPrice);
    setMaxValue(maxPrice);
  };
  useEffect(() => {
    setMaxAndMinPrice();
  }, []);

  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };
  const addToCart = (name) => {
    const filteredProductsArray = products.filter((product) => {
      return product.productName === name;
    });

    console.log(filteredProductsArray);
    setCart([...new Set([...cart, ...filteredProductsArray])]);
  };
  const removeProductFromCart = (name, quantity) => {
    const filteredCartArray = cart.filter((product) => {
      return product.productName !== name;
    });

    setCartCounter(cartCounter - quantity);

    cart.forEach((product) => {
      if (product.productName === name) {
        product.productQuantity = 1;
      }
    });

    setCart([...new Set([...filteredCartArray])]);
  };

  const increaseCartCounter = () => {
    setCartCounter(cartCounter + 1);
  };
  const decreseCartCounter = () => {
    if (cartCounter > 1) {
      setCartCounter(cartCounter - 1);
    }
  };

  const increseProductQuantity = (name) => {
    cart.forEach((product) => {
      if (product.productName === name) {
        product.productQuantity = product.productQuantity + 1;
      }
    });
    increaseCartCounter();
  };
  const decreseProductQuantity = (name) => {
    cart.forEach((product) => {
      if (product.productName === name && product.productQuantity > 1) {
        product.productQuantity = product.productQuantity - 1;
      }
    });
    decreseCartCounter();
  };

  // const handleSearchValue = (e) => {
  //   const searchInputValue = e.target.value;

  //   setSearchValue(searchInputValue);
  // };

  // const handlePriceValue = (e) => {
  //   const priceInputValue = e.target.value;
  //   setPriceValue(priceInputValue);
  // };
  const resetFilters = () => {
    setProducts([...productsDataArray]);
  };
  // const filerProductBySearchInput = (e) => {
  //   e.preventDefault();
  //   let tempProducts = [...products];
  //   const searchInputValue = e.target.searchInput.value;

  //   if (searchInputValue.length > 0) {
  //     tempProducts = tempProducts.filter((product) => {
  //       let tempSearchInput = searchInputValue.toLowerCase();
  //       let tempProductName = product.productName.toLowerCase();
  //       if (tempProductName.includes(tempSearchInput)) {
  //         return product;
  //       }
  //     });
  //   }

  //   setProducts(tempProducts);
  //   e.target.reset();
  // };

  // const filerProductBySearchInput = (e) => {
  //   let tempProducts = [...products];

  //   if (searchValue.length > 0) {
  //     tempProducts = tempProducts.filter((product) => {
  //       let tempSearchInput = searchValue.toLowerCase();
  //       let tempProductName = product.productName
  //         .toLowerCase()
  //         .slice(0, searchValue.length);
  //       if (tempSearchInput === tempProductName) {
  //         return product;
  //       }
  //     });
  //   }

  //   setProducts(tempProducts);
  // };

  const filterMenager = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    console.log(name);
    switch (name) {
      case "searchInput":
        setSearchValue(value);
        break;
      case "priceInput":
        setPriceValue(value);
      default:
        break;
    }
  };

  /// HERE
  useEffect(() => {
    sortData();
  }, [searchValue, priceValue]);

  // const filterProductsByPrice = () => {
  //   let tempProducts = [...products];

  //   let tempPrice = parseInt(priceValue);
  //   console.log(tempPrice);
  //   const filteredP = tempProducts.filter(
  //     (product) => product.productPrice <= tempPrice
  //   );
  //   console.log(tempProducts);
  //   console.log(filteredP);
  //   setProducts([...filteredP]);
  // };

  const handleDuplicateInCart = (name) => {
    /////cartcounter??
    if (cart.length !== 0) {
      const tempCart = [...cart];
      tempCart.forEach((product) => {
        if (product.productName === name) {
          product.productQuantity = product.productQuantity + 1;
        }
      });

      setCart([...new Set([...tempCart])]);
    }
    console.log(name);
  };

  const sortData = () => {
    let tempProducts = [...products];

    //by price

    console.log(priceValue);
    tempProducts = tempProducts.filter(
      (product) => product.productPrice <= priceValue
    );

    //by search input
    if (searchValue.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        let tempSearchInput = searchValue.toLowerCase();
        let tempProductName = product.productName
          .toLowerCase()
          .slice(0, searchValue.length);
        if (tempSearchInput === tempProductName) {
          return product;
        }
      });
    }

    setProducts(tempProducts);
  };

  const calculateCartTotals = () => {
    let total = 0;
    cart.forEach((product) => {
      total = total + product.productQuantity * product.productPrice;
    });
    setTotal(total);
  };
  useEffect(() => {
    calculateCartTotals();
  }, [cart, cartCounter]); //////????

  const clearCart = () => {
    setCart([]);
  };

  const resetCartCounter = () => {
    setCartCounter(0);
  };

  return (
    <BrowserRouter>
      <RootContext.Provider
        value={{
          cart,
          isCartOpen,
          cartCounter,
          searchValue,
          products,
          minValue,
          maxValue,
          priceValue,
          total,
          increseProductQuantity,
          handleDuplicateInCart,
          resetFilters,
          removeProductFromCart,
          addToCart,
          increaseCartCounter,
          handleCartOpen,
          handleCartClose,
          filterMenager,
          decreseProductQuantity,
          clearCart,
          resetCartCounter,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:productName" component={SingleProduct} />
        </Switch>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
