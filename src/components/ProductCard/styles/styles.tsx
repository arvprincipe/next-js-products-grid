import styled from 'styled-components'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const StyledCard = styled(({ ...props }) => <Card {...props} />)`
  .container-card{
    padding: 15px 8px 20px 8px;
  }
`;

export const StyledDetailsWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const StyledProductName = styled(({ ...props }) => <Typography {...props} />)`
  margin-bottom: 25px;
  & a{
    font-size: 15px;
    text-transform: capitalize;
  }
`;

export const StyledMoreColorsButton = styled(({ ...props }) => <Typography {...props} />)`
  width: 100%;
  text-transform: lowercase;
  margin-bottom: 20px;
  color: gray;
  cursor: pointer;
`;

