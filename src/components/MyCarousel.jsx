import React, { useEffect, useContext } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const MyCarousel = () => {
  const { getProducts, posts1, posts2 } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

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
        {posts1.map((item) => (
          <React.Fragment key={item.id}>
            <p className="carousel-title">{item.purpose}</p>
            <Item item={item} />
          </React.Fragment>
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
        {posts2.map((item) => (
          <React.Fragment key={item.id}>
            <p className="carousel-title">{item.purpose}</p>
            <Item item={item} />
          </React.Fragment>
        ))}
      </Carousel>
    </>
  );
};

function Item(props) {
  const { checkProductInCart, addAndDeleteProductInCart, getProducts } =
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
