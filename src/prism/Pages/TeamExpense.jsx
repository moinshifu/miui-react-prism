import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chart from "./Chart";

import {
  AppHeader,
  ReactButton,
  MiniCard,
  ReactTypo,
  ReactPaper,
  ReactGaugeChart,
  TeamExpenseSS,
  ReactTable,
  AppSidebar,
} from "../Components";
import { miniCardData, TeamExpenseSSData } from "../Utilites/Const";
import { Download, MoreHorizOutlined } from "@mui/icons-material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Accounting() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <AppHeader />
        <AppSidebar />
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
            <Grid container spacing={2}>
              <Grid item md={6}>
                <ReactTypo MainHeading="Team Expense" />
              </Grid>
              <Grid item md={6}>
                <ReactButton text={"Export to XLS"} sx={{ float: "right" }} />
              </Grid>

              {miniCardData.map((minicard) => {
                return (
                  <Grid item xs={12} lg={6} xl={3}>
                    <MiniCard
                      Heading={minicard.score}
                      SubTitle2={minicard.info}
                      icon={minicard.icon}
                      PLText={minicard.profit}
                    />
                  </Grid>
                );
              })}
              {/* <Grid item md={12} lg={4}>
                <ReactPaper Title={"Project Done Target"}>
                  <div
                    style={{
                      display: "grid",
                      justifyItems: "center",
                      textAlign: "center",
                    }}
                  >
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
              </Grid> */}
              <Grid item md={12} lg={4}>
                <ReactPaper Title={"Software Subscription"}>
                  <TeamExpenseSS />
                </ReactPaper>
              </Grid>
              <Grid item md={12} lg={8}>
                <ReactPaper Title={"Software Subscription"}>
                  <Chart />
                </ReactPaper>
              </Grid>
              <Grid item md={12} lg={4}>
                <ReactPaper Title={"Software Subscription"}>
                  <ReactTable />
                </ReactPaper>
              </Grid>
              <Grid item md={12} lg={4}>
                <ReactPaper Title={"Team Salary"}>
                  <ReactTable />
                </ReactPaper>
              </Grid>
              <Grid item md={12} lg={4}>
                <ReactPaper Title={"Office Inventory"}>
                  <ReactTable />
                </ReactPaper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
