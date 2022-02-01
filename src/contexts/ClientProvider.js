import React, { useReducer, useEffect, useState } from "react";
import { API } from "../helpers/const";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import axios from "axios";

export const ClientContext = React.createContext();

let cart = JSON.parse(localStorage.getItem("cart"));

const INIT_STATE = {
  products: null,
  detail: null,
  productsCountInCart: cart ? cart.products.length : 0,
  cart: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAIL":
      return { ...state, detail: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCount: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const res = await axios(API);
      let action = {
        type: "GET_PRODUCTS",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetail = async (id) => {
    try {
      const res = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_DETAIL",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  //! Корзина (CART)

  function addAndDeleteProductInCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let cartProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };
    cartProduct.subPrice = calcSubPrice(cartProduct);

    let check = cart.products.find((item) => {
      return item.product.id === product.id;
    });

    if (!check) {
      cart.products.push(cartProduct);
    } else {
      cart.products = cart.products.filter((item) => {
        return item.product.id !== product.id;
      });
    }
    console.log(cart);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }
    let check = cart.products.find((item) => {
      return item.product.id === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  }

  function changeCountCartProduct(value, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = value;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  }

  //! Пагинация PAGINATION
  const [posts1, setPosts1] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const arr1 = [];
  const arr2 = [];

  useEffect(() => {
    if (state.products) {
      state.products.map((item) => {
        if (item.purpose === "МАКИЯЖ") {
          arr1.push(item);
        }
        if (item.purpose === "УХОД ЗА ЛИЦОМ") {
          arr2.push(item);
        }
      });
      setPosts1(arr1);
      setPosts2(arr2);
    }
  }, [state.products, arr1, arr2]);

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts1 = posts1.slice(indexOfFirstPost, indexOfLastPost);
  const currentPosts2 = posts2.slice(indexOfFirstPost, indexOfLastPost);
  const totalProductsCount1 = posts1.length;
  const totalProductsCount2 = posts2.length;

  return (
    <ClientContext.Provider
      value={{
        getProducts: getProducts,
        getProductDetail: getProductDetail,
        addAndDeleteProductInCart: addAndDeleteProductInCart,
        checkProductInCart: checkProductInCart,
        getCart: getCart,
        changeCountCartProduct: changeCountCartProduct,
        deleteProductInCart: deleteProductInCart,
        setCurrentPage: setCurrentPage,
        products: state.products,
        detail: state.detail,
        productsCount: state.productsCount,
        cart: state.cart,
        products1: currentPosts1,
        products2: currentPosts2,
        postsPerPage: postsPerPage,
        totalProductsCount1: totalProductsCount1,
        totalProductsCount2: totalProductsCount2,
        currentPage: currentPage,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
