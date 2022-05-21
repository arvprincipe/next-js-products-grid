import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { StyledGrid } from "./styles";

export default function GridControls({
  setGridColumns,
  gridColumns,
  isMobile,
}: any) {

  function handleChangeColumns(column: number) {
    setGridColumns(column);
  }

  return (
    <StyledGrid className="controls-gd">
      <IconButton
        color="inherit"
        aria-label="upload picture"
        component="span"
        className={gridColumns === 1 ? "active-btn" : ""}
        disabled={!isMobile ? true : false}
        onClick={() => handleChangeColumns(1)}
      >
        <RemoveIcon />
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="upload picture"
        component="span"
        className={gridColumns === 2 ? "active-btn" : ""}
        disabled={!isMobile ? true : false}
        onClick={() => handleChangeColumns(2)}
      >
        <AddIcon />
      </IconButton>
    </StyledGrid>
  );
}
