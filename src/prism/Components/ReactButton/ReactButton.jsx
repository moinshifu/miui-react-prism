import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { primary } from "../../Utilites/Const";

const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#1e58d5"),
  backgroundColor: primary,
  "&:hover": {
    backgroundColor: primary,
  },
}));

const ReactButton = ({ text, onClick, outline, sx, size, startIcon }) => {
  return (
    <>
      {outline ? (
        <Button
          onClick={onClick}
          variant="outlined"
          sx={sx}
          size={size}
          startIcon={startIcon}
        >
          {text}
        </Button>
      ) : (
        <PrimaryButton
          onClick={onClick}
          variant="contained"
          sx={sx}
          size={size}
          startIcon={startIcon}
        >
          {text}
        </PrimaryButton>
      )}
    </>
  );
};

export default ReactButton;
