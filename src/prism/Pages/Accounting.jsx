import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";

import {
  AppHeader,
  ReactButton,
  MiniCard,
  ReactTypo,
  ReactPaper,
  ReactGaugeChart,
  LatestTransaction,
  ReactBarChart,
} from "../Components";
import {
  AccountingMiniCardData,
  AccountingRevenueData,
} from "../Utilites/Const";
import { Download, MoreHorizOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Accounting() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <AppHeader open={open} />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <ReactTypo
                  MainHeading="Accounting"
                  SubTitle2={
                    "In below, you will see your accounting report so far."
                  }
                />
              </Grid>
              <Grid item md={6}>
                <ReactButton text={"Download Report"} sx={{ float: "right" }} />
              </Grid>

              <Grid item md={12} lg={9}>
                <ReactPaper
                  Title={"Revenue Overview"}
                  SubTitle2={"Show revenue overview from Jan - May 2024"}
                  Action={
                    <ReactButton
                      text="Download"
                      outline
                      startIcon={<Download />}
                    />
                  }
                >
                  <ReactBarChart />
                </ReactPaper>
              </Grid>
              <Grid item md={12} lg={3}>
                <Grid container spacing={3}>
                  {AccountingRevenueData.map((minicard, index) => {
                    console.log(minicard);
                    return (
                      <Grid
                        item
                        xs={12}
                        sx={{ mb: index == minicard.length - 1 ? 3 : 0 }}
                        key={index}
                      >
                        <MiniCard
                          AvatarSize={60}
                          block
                          Heading={`$${minicard.score}`}
                          SubTitle2={minicard.info}
                          icon={minicard.icon}
                          PLText={minicard.profit}
                          Action={
                            <MoreHorizOutlined sx={{ cursor: "pointer" }} />
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              {AccountingMiniCardData.map((card) => {
                return (
                  <Grid item xs={12} md={4} lg={3}>
                    <MiniCard
                      block
                      Title={card.name}
                      SubTitle2={card.date}
                      icon={card.icon}
                      RightBodyText={card.price}
                      RightSubTitle2={"/ yearly"}
                    />
                  </Grid>
                );
              })}
              <Grid item md={12} lg={4}>
                <ReactPaper Title={"Project Done Target"}>
                  <div style={{ display: "grid", justifyContent: "center" }}>
                    <ReactGaugeChart />
                    <ReactTypo
                      SubTitle2={
                        "Great Job you and your team can finish over 75 project so far."
                      }
                    />
                  </div>
                </ReactPaper>
              </Grid>
              <Grid item md={12} lg={8}>
                <ReactPaper
                  Title={"Latest Transaction"}
                  children={<LatestTransaction />}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
