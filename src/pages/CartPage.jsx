import React, { useContext, useEffect } from "react";
import CartTable from "../components/CartTable";
import { ClientContext } from "../contexts/ClientProvider";

const CartPage = () => {
  const { cart, getCart, changeCountCartProduct } = useContext(ClientContext);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  if (!cart) {
    return <h2>LOADING...</h2>;
  }
  if (cart.products.length === 0) {
    return <h2>ИЗВИНИТЕ, ПОКА ВЫ НИЧЕГО НЕ ВЫБРАЛИ</h2>;
  }

  return (
    <div>
      <CartTable cart={cart} changeCountCartProduct={changeCountCartProduct} />
    </div>
  );
};

export default CartPage;
