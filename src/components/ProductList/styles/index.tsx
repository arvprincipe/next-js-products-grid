import styled from 'styled-components';
import Grid  from '@mui/material/Grid';

export const StyledGrid = styled(({ ...props }) => <Grid {...props} />)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;
