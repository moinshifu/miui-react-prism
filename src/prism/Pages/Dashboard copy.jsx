import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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
  AppSidebar,
} from "../Components";
import { Download, MoreHorizOutlined } from "@mui/icons-material";

import { KapativeCards } from "../Utilites/Const";
import ReactLink from "../Components/ReactButton/ReactLink";

const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <AppHeader />
        <AppSidebar />
        <Box
          component="main"
          sx={{
            backgroundColor: "#f6f6f6",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ my: 4 }}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <ReactTypo
                  MainHeading="Konarq - KPI Cards"
                  // SubTitle2={"This is your Dashboard Overview."} 
                />
              </Grid>
              <Grid item md={6}>
                <ReactButton text={"Download Report"} sx={{ float: "right" }} />
              </Grid>

              {/* {KapativeCards.map((minicard) => {
                return (
                  <Grid item xs={12} lg={6} xl={3}>
                    <MiniCard
                      sx={{ backgroundColor: "red" }}
                      Heading={minicard.score}
                      SubTitle2={minicard.info}
                      icon={minicard.icon}
                      PLText={minicard.profit}
                    />
                  </Grid>
                );
              })} */}
              {KapativeCards.map((minicard) => {
                return (
                  <Grid item xs={12} lg={6} xl={3}>

<MiniCard
                          AvatarSize={60}
                          block
                          Heading={`$${minicard.score}`}
                          SubTitle2={minicard.info}
                          icon={minicard.icon}
                          PLText={minicard.profit}
                          RightSubTitle2={'22 - 23'}
                          Action={
                            <MoreHorizOutlined sx={{ cursor: "pointer" }} />
                          }
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
                <ReactPaper
                  Title={"Latest Client"}
                  children={<LatestClient />}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
