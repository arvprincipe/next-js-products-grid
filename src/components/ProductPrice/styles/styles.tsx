import styled from 'styled-components';
import Grid from "@mui/material/Grid";

export const PriceContainer = styled(({ ...props }) => <Grid {...props} />)`
  margin-bottom: 20px;
`;

export const DisplayPrice = styled.div`
  color: red;
  font-size: 18px;
`;

export const OfferPrice = styled.div`
  text-decoration: line-through;
  font-size: 14px;
  margin-bottom: 10px;
`;