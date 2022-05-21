import styled from 'styled-components';
import Grid from '@mui/material/Grid';

export const StyledMainContainer = styled(({ ...props }) => <Grid {...props} />)`
  width: 100%;
`;

export const StyledContainer = styled.div`
  width: 80%;
  padding-top: 10px;
  @media only screen and (max-width: 992px) {
    width: 100%;
    padding: 10px;
  }
`;

export const StyledGridControls = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 5px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    form {
      order: 2;
    }
    .controls-gd {
      order: 1;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
    }
  }
`;