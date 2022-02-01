import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

export default function ProductCard({ item }) {
  const { addAndDeleteProductInCart, checkProductInCart } =
    React.useContext(ClientContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2">
          <h4>
            <strong>{item.brand}</strong>
          </h4>
        </Typography>
        <Typography
          // className="product-card-title"
          // gutterBottom
          variant="h5"
          // component="div"
        >
          <p>{item.name}</p>
        </Typography>
        <CardMedia
          sx={{ mt: 4 }}
          component="img"
          height="200"
          image={item.image}
          alt={item.name}
          className="product-card-image"
        />
        <Typography variant="body2">
          <h4>{item.price} Руб.</h4>
        </Typography>
      </CardContent>
      <CardActions>
        {checkProductInCart(item.id) ? (
          <button
            className="admin-btn"
            onClick={() => addAndDeleteProductInCart(item)}
          >
            УБРАТЬ ИЗ КОРЗИНЫ
          </button>
        ) : (
          <button
            className="admin-btn"
            onClick={() => addAndDeleteProductInCart(item)}
            size="small"
          >
            ДОБАВИТЬ В КОРЗИНУ
          </button>
        )}

        <Link to={`/products/${item.id}`}>
          <button className="admin-btn" size="small">
            ПОДРОБНЕЕ
          </button>
        </Link>
      </CardActions>
    </Card>
  );
}
