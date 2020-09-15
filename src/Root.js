import React, { useState, useEffect } from "react";
import RootContext from "./context/context";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import { productsDataArray } from "./localData/productsDataArray";
import SingleProduct from "./views/SingleProduct/SingleProduct";
import { client } from "./contentfulData/contentfulData";
import img1 from "./assets/images/slider/slider_1.jpg";
import img2 from "./assets/images/slider/slider_2.jpg";
import img3 from "./assets/images/slider/slider_3.jpg";
import GlobalStyle from "./themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/mainTheme";

const Root = () => {
  const getCartFromLocalStorage = () => {
    let localStorageCart;
    if (localStorage.getItem("cart")) {
      localStorageCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorageCart = [];
    }
    return localStorageCart;
  };
  const getCartCounterFromLocalStorage = () => {
    let localStorageCartCounter;
    if (localStorage.getItem("cartCounter")) {
      localStorageCartCounter = JSON.parse(localStorage.getItem("cartCounter"));
    } else {
      localStorageCartCounter = 0;
    }
    return localStorageCartCounter;
  };
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [cartCounter, setCartCounter] = useState(
    getCartCounterFromLocalStorage()
  );
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [categoryValue, setCategoryValue] = useState("all");
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [banerImg, setBanerImg] = useState(0);
  const [banerArray, setBanerArray] = useState([img1, img2, img3]);
  const [imgCounter, setImgCounter] = useState(0);

  useEffect(() => {
    // let counter = 0;    ????
    setBanerImg(banerArray[imgCounter]);

    const timer = setInterval(() => {
      setImgCounter(imgCounter + 1);
      // counter + 1;   ?????

      if (imgCounter === banerArray.length - 1) {
        setImgCounter(0);
      }
    }, 4000);

    return () => clearInterval(timer);
  });

  const setContentfulData = (data) => {
    if (data.length !== 0) {
      const contentfulProducts = data.map((item) => {
        const productImage = item.fields.productImage.fields.file.url;
        const productId = item.sys.id;
        const productDesc = item.fields.productDesc;
        const productPrice = item.fields.productPrice;
        const productName = item.fields.productName;
        const productQuantity = item.fields.productQuantity;
        const productCategory = item.fields.productCategory;

        const product = {
          productId,
          productName,
          productImage,
          productPrice,
          productQuantity,
          productDesc,
          productCategory,
        };
        return product; ///wrzuca product do contentfulProducts???
      });

      console.log(contentfulProducts);

      let maxPrice = Math.max(
        ...contentfulProducts.map((product) => product.productPrice) ////??
      );

      setPriceValue(maxPrice);
      console.log(maxPrice);
      setMaxValue(maxPrice);

      setProducts(contentfulProducts); //Przechowywanie wszystkich produktów
      setFilteredProducts(contentfulProducts);
    }
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((response) => setContentfulData(response.items))
      .catch((error) => console.error(error));
  };
  const setCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const setCartCounterToLocalStorage = () => {
    localStorage.setItem("cartCounter", JSON.stringify(cartCounter));
  };
  useEffect(() => {
    setCartToLocalStorage();
    setCartCounterToLocalStorage();
  }, [cart, cartCounter]);

  //get contentful data
  useEffect(() => {
    getContentfulData();
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
    console.log(products);

    const value = e.target.value;
    console.log(name);
    console.log(value);
    switch (name) {
      case "searchInput":
        setSearchValue(value);
        break;
      case "priceInput":
        setPriceValue(value);
        break;
      case "categoryInput":
        console.log("Halo");
        setCategoryValue(value);
    }
  };

  useEffect(() => {
    sortData();
  }, [searchValue, priceValue, categoryValue]);

  const sortData = () => {
    let tempProducts = [...products];

    //by search input
    if (searchValue.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        let tempSearchInput = searchValue.toLowerCase();
        let tempProductName = product.productName
          .toLowerCase()
          .slice(0, product.productName.length);

        if (tempProductName.includes(tempSearchInput)) {
          return product;
        }
      });
    }

    //by price

    console.log(priceValue);
    let tempPrice = parseInt(priceValue);
    tempProducts = tempProducts.filter(
      (product) => product.productPrice <= tempPrice
    );

    // by category
    if (categoryValue !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.productCategory === categoryValue
      );
    }

    setFilteredProducts(tempProducts);
  };

  /// HERE

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
    if (cart.length !== 0) {
      const tempCart = [...cart];
      tempCart.forEach((product) => {
        if (product.productName === name) {
          product.productQuantity = product.productQuantity + 1;
        }
      });

      setCart([...new Set([...tempCart])]);
    }
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
  }, [cart, cartCounter]);

  const clearCart = () => {
    setCart([]);
  };

  const resetCartCounter = () => {
    setCartCounter(0);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
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
            categoryValue,
            filteredProducts,
            banerImg,

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
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
