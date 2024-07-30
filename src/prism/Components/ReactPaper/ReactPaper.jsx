import { Paper, styled, Grid } from "@mui/material";

import { cardShadow } from "../../Utilites/Const";
import ReactTypo from "../ReactTypo/ReactTypo";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  borderRadius: 6,
  boxShadow: cardShadow,
  padding: "1rem 1.5rem",
}));

export default function ReactPaper({ children, sx, Title, Action }) {
  return (
    <Item variant="outline" sx={sx}>
      <Grid container alignItems="center" justifyContent="space-between">
        <ReactTypo Title={Title} />
        {Action}
      </Grid>
      {children}
    </Item>
  );
}
