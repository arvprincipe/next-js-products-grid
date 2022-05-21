import { NextPage } from "next";
import Grid from "@mui/material/Grid";
import {  } from "./styles/styles";
import DisplayPrice  from './Price'

interface PriceProps {
  price: any
}

const ProductPrice: NextPage<PriceProps> = ({ price }) => {
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <DisplayPrice min={29.50} max={45.99} currency="EUR" language="es-ES" message="not"/>
      </Grid>
    </Grid>
  );
};

export default ProductPrice;