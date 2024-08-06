import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import {
  AppHeader,
  ReactButton,
  MiniCard,
  ReactTypo,
  ReactPaper,
  ReactGaugeChart,
  LatestTransaction,
  ReactBarChart,
  AppSidebar,
} from "../Components";
import {
  AccountingMiniCardData,
  AccountingRevenueData,
  KapativeCards
} from "../Utilites/Const";
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
                  <Grid item xs={12} md={6} lg={3}>
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
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
