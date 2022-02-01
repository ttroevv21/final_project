import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";
import { Grid, Container, Button } from "@mui/material";

const ProductDetail = () => {
  const params = useParams();
  const {
    getProductDetail,
    detail,
    checkProductInCart,
    addAndDeleteProductInCart,
  } = useContext(ClientContext);

  useEffect(() => {
    getProductDetail(params.id);
  }, []);
  if (!detail) {
    return <h2>LOADING...</h2>;
  }

  return (
    <Container>
      <div className="product-detail">
        <Grid container>
          <Grid xs={12} sm={6} md={6} item>
            <div>
              <img
                className="carousel-image"
                src={detail.image}
                alt={detail.name}
              />
            </div>
          </Grid>
          <Grid xs={12} sm={12} ms={12} item>
            <div>
              <h4>{detail.name}</h4>
              <ul>
                <li>
                  <span>БРЕНД:</span>
                  <strong>{detail.brand}</strong>
                </li>

                <li>
                  <span>ОПИСАНИЕ:</span>
                  <strong>{detail.description}</strong>
                </li>
              </ul>
              <h3>{detail.price} Руб.</h3>
              {checkProductInCart(detail.id) ? (
                <button
                  className="btn_custom"
                  onClick={() => addAndDeleteProductInCart(detail)}
                >
                  УБРАТЬ ИЗ КОРЗИНЫ
                </button>
              ) : (
                <button
                  className="btn_custom"
                  onClick={() => addAndDeleteProductInCart(detail)}
                >
                  ДОБАВИТЬ В КОРЗИНУ
                </button>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
