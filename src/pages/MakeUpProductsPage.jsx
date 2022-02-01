import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import ProductCard from "../components/ProductCard";
import MakeupPagination from "../components/MakeupPagination";

const MakeUpProductsPage = () => {
  const { getProducts, products1 } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products1) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Grid container spacing={5}>
        {products1.map((item) => {
          if (item.purpose === "МАКИЯЖ") {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <ProductCard item={item} />
              </Grid>
            );
          }
        })}
      </Grid>
      <MakeupPagination />
    </div>
  );
};

export default MakeUpProductsPage;
