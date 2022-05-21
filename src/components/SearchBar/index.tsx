import { NextPage } from "next";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { StyledInputSearch, Form } from './styles/styles'

interface SearchBarProps {
  handleInputChange: Function;
  searchQuery: string;
  isSearching: boolean;
}

const SearchBar: NextPage<SearchBarProps> = ({
  handleInputChange,
  searchQuery,
  isSearching
}) => {
  return (
    <Form>
      <StyledInputSearch
        id="search-bar"
        value={searchQuery}
        onInput={handleInputChange}
        label="Enter a city name"
        placeholder="Buscar"
        type="text"
        endAdornment={
          <InputAdornment position="start">
            <IconButton type="submit" aria-label="search">
              {isSearching ? <CircularProgress /> : <SearchIcon /> }
            </IconButton>
          </InputAdornment>
        }
      />
    </Form>
  );
};

export default SearchBar;
