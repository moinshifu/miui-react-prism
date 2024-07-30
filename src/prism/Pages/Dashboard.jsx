import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import PieChartCircle from "./PieChart";

import {
  AppHeader,
  ReactButton,
  MiniCard,
  ReactTypo,
  ReactPaper,
  ReactTable,
  LatestClient,
  ReactGaugeChart
} from "../Components";
import { miniCardData, lightText } from "../Utilites/Const";
import ReactLink from "../Components/ReactButton/ReactLink";

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

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar> */}
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
                  MainHeading="Hi Moin"
                  SubTitle2={"This is your Dashboard Overview."}
                />
              </Grid>
              <Grid item md={6}>
                <ReactButton text={"Download Report"} sx={{ float: "right" }} />
              </Grid>

              {miniCardData.map((minicard) => {
                return (
                  <Grid item xs={12} md={4} lg={3}>
                    <MiniCard
                      score={minicard.score}
                      info={minicard.info}
                      icon={minicard.icon}
                      profit={minicard.profit}
                    />
                  </Grid>
                );
              })}

              <Grid item md={12} lg={6}>
                <ReactPaper Title={"Task Progress"}>
                  <Chart />
                </ReactPaper>
              </Grid>
              <Grid item md={12} lg={6}>
                <ReactPaper
                  Title={"Active Projects"}
                  Action={<ReactLink text={"See All"} />}
                >
                  <ReactTable />
                </ReactPaper>
              </Grid>
              {/* Recent Deposits */}

              <Grid item md={12} lg={6}>
                <ReactPaper
                  Title={"Top Inquiry"}
                  children={<PieChartCircle />}
                />
              </Grid>
              <Grid item md={12} lg={6}>
                <ReactPaper Title={"Latest Client"} children={<LatestClient />} />
              </Grid>
              <Grid item md={12} lg={6}>
                <ReactPaper
                  Title={"Project Done Target"}
                  
                >
                <div style={{display: 'grid', justifyContent: 'center'}}>
                <ReactGaugeChart />
                <ReactTypo SubTitle2={'Great Job you and your team can finish over 75 project so far.'} />
                </div>
                </ReactPaper>

              </Grid>
              <Grid item md={12} lg={6}>
                <ReactPaper Title={"Latest Client"} children={<LatestClient />} />
              </Grid>
             
            </Grid>
           
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
