import { NextPage } from "next";
import Link from "next/link";
import {
  StyledCard,
  StyledDetailsWrapper,
  StyledProductName,
  StyledMoreColorsButton,
} from "./styles/styles";
import ProductImage from "../ProductImage";
import AddToCartButton from "../AddToCartButton";
import ProductPrice from "../ProductPrice";

interface ProductCardProps {
  product: {
    name: string;
    thumbnail: string;
    seo: any;
    price: any;
  };
}

const ProductCard: NextPage<ProductCardProps> = ({ product }) => {
  return (
    <StyledCard>
      <div className="container-card">
        <ProductImage
          src={product.thumbnail}
          alt={product.name}
          title={product.name}
        />

        <StyledDetailsWrapper>
          <StyledProductName component="div">
            <Link href={product.seo.href}>{product.name}</Link>
          </StyledProductName>
          <ProductPrice price={product.price} />
          <StyledMoreColorsButton variant="p">
            Más Colores
          </StyledMoreColorsButton>

          <AddToCartButton />
        </StyledDetailsWrapper>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
