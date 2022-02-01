import React, { useEffect, useContext } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const MyCarousel = () => {
  const {
    getProducts,
    products,
    addAndDeleteProductInCart,
    checkProductInCart,
  } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  let purp1 = [];
  let purp2 = [];
  products.map((item) => {
    if (item.purpose === "УХОД ЗА ЛИЦОМ") {
      purp1.push(item);
    }
    if (item.purpose === "МАКИЯЖ") {
      purp2.push(item);
    }
  });

  return (
    <>
      <Carousel
        NextIcon={
          <ArrowForwardIosRoundedIcon sx={{ color: "#fff", fontSize: 15 }} />
        }
        PrevIcon={
          <ArrowBackIosNewRoundedIcon sx={{ color: "#fff", fontSize: 15 }} />
        }
      >
        {purp1.map((item) => (
          <>
            <p className="carousel-title">{item.purpose}</p>
            <Item key={item.id} item={item} />
          </>
        ))}
      </Carousel>
      <Carousel
        NextIcon={
          <ArrowForwardIosRoundedIcon sx={{ color: "#fff", fontSize: 15 }} />
        }
        PrevIcon={
          <ArrowBackIosNewRoundedIcon sx={{ color: "#fff", fontSize: 15 }} />
        }
      >
        {purp2.map((item) => (
          <>
            <p className="carousel-title">{item.purpose}</p>
            <Item key={item.id} item={item} />
          </>
        ))}
      </Carousel>
    </>
  );
};

function Item(props) {
  const { checkProductInCart, addAndDeleteProductInCart } =
    useContext(ClientContext);
  return (
    <Paper className="carousel-card">
      <p>{props.item.brand}</p>
      <h4>{props.item.name}</h4>
      <div className="product-image">
        <img className="carousel-image" src={props.item.image} alt="" />
      </div>
      <h4>{props.item.price} Руб.</h4>
      {checkProductInCart(props.item.id) ? (
        <button
          className="btn_custom"
          onClick={() => addAndDeleteProductInCart(props.item)}
        >
          УБРАТЬ ИЗ КОРЗИНЫ
        </button>
      ) : (
        <button
          className="btn_custom"
          onClick={() => addAndDeleteProductInCart(props.item)}
        >
          ДОБАВИТЬ В КОРЗИНУ
        </button>
      )}
    </Paper>
  );
}

export default MyCarousel;
