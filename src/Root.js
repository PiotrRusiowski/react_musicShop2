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
import img1 from "./assets/images/aboutSlider/img2.jpg";
import img2 from "./assets/images/aboutSlider/img3.jpg";
import img3 from "./assets/images/aboutSlider/img4.jpg";
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
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleHamburgerMenuOpen = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
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

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((response) => setContentfulData(response.items))
      .catch((error) => console.error(error));
  };

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
        return product;
      });

      let maxPrice = Math.max(
        ...contentfulProducts.map((product) => product.productPrice)
      );

      setPriceValue(maxPrice);
      setMaxValue(maxPrice);

      setProducts(contentfulProducts);
      setFilteredProducts(contentfulProducts);
    }
  };

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

  const resetFilters = () => {
    setProducts([...productsDataArray]);
  };

  const filterMenager = (e) => {
    const name = e.target.name;
    console.log(products);

    const value = e.target.value;
    switch (name) {
      case "searchInput":
        setSearchValue(value);
        break;
      case "priceInput":
        setPriceValue(value);
        break;
      case "categoryInput":
        setCategoryValue(value);
    }
  };
  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  useEffect(() => {
    sortData();
  }, [searchValue, priceValue, categoryValue]);

  const sortData = () => {
    let tempProducts = [...products];
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

    let tempPrice = parseInt(priceValue);
    tempProducts = tempProducts.filter(
      (product) => product.productPrice <= tempPrice
    );
    if (categoryValue !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.productCategory === categoryValue
      );
    }

    setFilteredProducts(tempProducts);
  };
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

  useEffect(() => {
    setBanerImg(banerArray[imgCounter]);
    const timer = setInterval(() => {
      setImgCounter(imgCounter + 1);
      if (imgCounter === banerArray.length - 1) {
        setImgCounter(0);
      }
    }, 4000);

    return () => clearInterval(timer);
  });

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
            handleHamburgerMenuOpen,
            isHamburgerMenuOpen,
            handlePriceChange,
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
