import styled from 'styled-components';
import Grid  from '@mui/material/Grid';

export const StyledGrid = styled(({ ...props }) => <Grid {...props} />)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media only screen and (max-width: 768px) {
    /* grid-template-columns: repeat(auto-fit, minmax(40%, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(${({gridcolumns}) => (gridcolumns === 2) ? "40%" : "100%"}, 1fr));
    gap: 10px;
  }
  
`;
