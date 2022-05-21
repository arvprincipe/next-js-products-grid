import styled from 'styled-components';
import Button from '@mui/material/Button';

// export const 
export const StyledButon = styled(({ ...props }) => <Button {...props} />)`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;
