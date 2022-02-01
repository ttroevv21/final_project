import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { AdminContext } from "../contexts/AdminProvider";

const EditRow = ({ editProduct, setEditProduct }) => {
  const [product, setProduct] = useState(editProduct);
  const { saveEditedProduct } = useContext(AdminContext);

  function handleChange(event) {
    let object = {
      ...product,
      [event.target.name]: event.target.value,
    };
    setProduct(object);
  }

  function handleClick() {
    saveEditedProduct(product);
    setEditProduct(null);
  }

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="products">
        <TextField
          name="name"
          onChange={handleChange}
          variant="standard"
          value={product.name}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          name="brand"
          onChange={handleChange}
          variant="standard"
          value={product.brand}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          name="price"
          onChange={handleChange}
          variant="standard"
          value={product.price}
        />
      </TableCell>
      <TableCell align="right">
        <input
          type="text"
          name="purpose"
          onChange={handleChange}
          value={product.purpose}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          name="description"
          onChange={handleChange}
          variant="standard"
          value={product.description}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          name="image"
          onChange={handleChange}
          variant="standard"
          value={product.image}
        />
      </TableCell>
      <TableCell align="right">
        <Button onClick={handleClick} variant="outlined">
          Save
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditRow;
