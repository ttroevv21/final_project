import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../contexts/AdminProvider";
import { Button } from "@mui/material";
import EditRow from "./EditRow";

export default function MyTable() {
  const { getProducts, products, deleteProduct } =
    React.useContext(AdminContext);
  React.useEffect(() => {
    getProducts();
  }, []);

  const [editProduct, setEditProduct] = React.useState(null);

  console.log(editProduct);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Purpose</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <React.Fragment key={product.id}>
              {editProduct?.id === product.id ? (
                <EditRow
                  setEditProduct={setEditProduct}
                  editProduct={editProduct}
                />
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="products">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">{product.brand}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.description}</TableCell>
                  <TableCell align="right">{product.purpose}</TableCell>
                  <TableCell align="right">
                    <img src={product.image} alt="sneakers" width={100} />
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="admin-btn"
                      onClick={() => setEditProduct(product)}
                      variant="outlined"
                    >
                      Edit
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="admin-btn"
                      onClick={() => deleteProduct(product.id)}
                      variant="outlined"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
