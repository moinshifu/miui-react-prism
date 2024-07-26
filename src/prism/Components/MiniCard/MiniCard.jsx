import { Avatar, Paper, Stack, Typography, styled } from "@mui/material";

import { primary, success, alert, cardShadow } from "../../Utilites/Const";
import ReactTypo from "../ReactTypo/ReactTypo";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  borderRadius: 6,
  boxShadow: cardShadow,
}));

export default function MiniCard({ score, icon, info, profit }) {
  const Tag = styled(Typography)(() => ({
    color: profit >= 0 ? success : alert,
    position: "absolute",
    right: 0,
    top: 0,
    fontWeight: 700,
    fontSize: "15px",
  }));
  return (
    <Item
      variant="outline"
      sx={{
        my: 1,
        mx: "auto",
        p: 3,
      }}
    >
      <Stack spacing={2} direction="row" alignItems="center">
        <Avatar sx={{ bgcolor: "#edf4fe", color: primary }}>{icon}</Avatar>
        <div style={{ flex: "1" }}>
          <ReactTypo
            Heading={score}
            children={<Tag>{profit}%</Tag>}
            sx={{ position: "relative", paddingRight: "28px" }}
          />
          <ReactTypo SubTitle2={info} />
        </div>
      </Stack>
    </Item>
  );
}
