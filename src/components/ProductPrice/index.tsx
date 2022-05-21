import React from 'react'
import { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { PriceContainer } from "./styles/styles";
import DisplayPrice from './Price'
import { DISPLAY, OFFER } from '../../utils/properties'

interface PriceProps {
  price: any
}

const ProductPrice: NextPage<PriceProps> = (props) => {
  const priceArray = props.price;
  const [offerPrice, setOfferPrice] = React.useState(0);
  const [displayPrice, setDisplayPrice] = React.useState(0);
  const [currency, setCurrency] = React.useState('EUR');

  const initPrice = () => {
    let productOfferPrice = 0;
    let prodDisplayPrice = 0;
    let currencyPrice: string = "";

    for (const price of priceArray) {
      if (price.usage === OFFER && price.value !== "") {
        productOfferPrice = parseFloat(price.value);
        currencyPrice = price.currency;
      } else if (price.usage === DISPLAY && price.value !== "") {
        prodDisplayPrice = parseFloat(price.value);
        currencyPrice = price.currency;
      }
    }

    const price =
      productOfferPrice > 0
        ? productOfferPrice
        : prodDisplayPrice > 0
          ? prodDisplayPrice
          : 0;

    setOfferPrice(productOfferPrice);
    setDisplayPrice(prodDisplayPrice);
    setCurrency(currencyPrice);
    return { price, currency };
  }
  React.useEffect(() => {
    if (priceArray) {
      initPrice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceArray])

  return (
    <PriceContainer item>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <DisplayPrice min={offerPrice} max={displayPrice} currency="EUR" language="es-ES" message="not" />
      </Grid>
    </PriceContainer>
  );
};

export default ProductPrice;