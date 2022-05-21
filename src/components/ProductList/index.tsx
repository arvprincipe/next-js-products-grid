import React from "react";
import Grid from "@mui/material/Grid";
import { StyledGrid } from "./styles";
import StyledProductCard from "../ProductCard";

interface ProductListProps {
  productList: Array<any>;
  isMobile?: boolean;
  gridColumns: number;
}

const ProductList = ({
  productList,
  gridColumns,
}: ProductListProps) => {

  return (
    <StyledGrid gridcolumns={gridColumns}>
      {productList.map((product: any, index: any) => (
        <Grid item key={index}>
          <StyledProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default ProductList;
