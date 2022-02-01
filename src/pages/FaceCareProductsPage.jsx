import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import ProductCard from "../components/ProductCard";
import FaceCarePagination from "../components/FaceCarePagination";

const FaceCareProductsPage = () => {
  const { getProducts, products2 } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products2) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Grid container spacing={5}>
        {products2.map((item) => {
          if (item.purpose === "УХОД ЗА ЛИЦОМ") {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <ProductCard item={item} />
              </Grid>
            );
          }
        })}
      </Grid>
      <FaceCarePagination />
    </div>
  );
};

export default FaceCareProductsPage;
