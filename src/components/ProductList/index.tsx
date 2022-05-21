import React from 'react'
import {
  StyledGrid,
} from './styles'
import StyledProductCard from "../ProductCard";

interface ProductListProps {
  productList: Array<any>
}

const ProductList = ({ productList }: ProductListProps) => {

  return (
    <StyledGrid>
      {productList.map((product: any) => (
        <StyledProductCard key={product.id} product={product} />
      ))}
    </StyledGrid>
  );
};

export default ProductList;
