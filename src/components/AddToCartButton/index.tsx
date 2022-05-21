import { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { StyledButon } from "./styles/styles";

const AddToCartButton: NextPage = () => {
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <StyledButon color="info" variant="contained">
          Añadir
        </StyledButon>
      </Grid>
    </Grid>
  );
};

export default AddToCartButton;
