import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ClientContext } from "../contexts/ClientProvider";

export default function FaceCarePagination(props) {
  const { postsPerPage, totalProductsCount2, currentPage, setCurrentPage } =
    React.useContext(ClientContext);

  const pagesCount = Math.ceil(totalProductsCount2 / postsPerPage);

  return (
    <Stack spacing={2}>
      <Pagination
        count={pagesCount}
        page={currentPage}
        onChange={(e, newPage) => {
          setCurrentPage(newPage);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
    </Stack>
  );
}
