import styled from 'styled-components'
import OutlinedInput from "@mui/material/OutlinedInput";

export const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;

export const StyledInputSearch = styled(({ ...props }) => <OutlinedInput {...props} />)`
  width: 40%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;