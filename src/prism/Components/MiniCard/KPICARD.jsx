import { Avatar, Stack, Typography, styled } from "@mui/material";
import { TrendingUpOutlined, TrendingDownOutlined } from "@mui/icons-material";
import {
  primary,
  success,
  alert,
  primaryLight,
  successlight,
  alertlight,
} from "../../Utilites/Const";
import ReactTypo from "../ReactTypo/ReactTypo";
import ReactPaper from "../ReactPaper/ReactPaper";
export default function KPICARD({
  Heading,
  Title,
  icon,
  SubTitle2,
  Block,
  AvatarSize,
  RightSubTitle,
  RightSubTitle2,
  RightBodyText,
  PLText,
  Action,
  Name,
}) {
  const Tag = styled(Typography)(() => ({
    color: PLText >= 0 ? success : alert,
    background: PLText >= 0 ? successlight : alertlight,
    fontWeight: 700,
    fontSize: "15px",
    display: "flex",
    minWidth: 90,
    display: "inline-flex",
    padding: "3px 10px",
    "border-radius": 25,
    alignItems: "center",
    justifyContent: "center",
    margin: "15px auto",
  }));
  return (
    <ReactPaper
      sx={{ minHeight: 190, display: "flex", flexDirection: "column" }}
    >
      <Stack
        spacing={2}
        direction={"row"}
        sx={{ width: "100%", marginBottom: "30px" }}
      >
        <div style={{ flex: "1", width: "100%" }}>
          <ReactTypo Title={Name} />
        </div>
        {Action}
      </Stack>
      {/* <Stack
        spacing={2}
        direction={Block ? "column" : "row"}
        alignItems={Block ? "flex-start" : "center"}
      >
        <Stack
          spacing={2}
          direction={"row"}
          sx={{ width: Action ? "100%" : "auto" }}
        >
          <div style={{ flex: "1", width: "100%" }}>
            <Avatar
              sx={{
                bgcolor: primaryLight,
                color: primary,
                width: AvatarSize,
                height: AvatarSize,
              }}
            >
              {icon}
            </Avatar>
            <ReactTypo Title={Title} sx={{ whiteSpace: "nowrap" }} />
          </div>
          {(RightSubTitle || RightBodyText || RightSubTitle2 || PLText) && (
            <div style={{ textAlign: "right" }}>
              <ReactTypo
                SubTitle={RightSubTitle}
                BodyText={RightBodyText}
                sx={{ whiteSpace: "nowrap" }}
              />
              {PLText && (
                <Tag>
                  {PLText}%
                  {PLText > 0 ? (
                    <TrendingUpOutlined />
                  ) : (
                    <TrendingDownOutlined />
                  )}
                </Tag>
              )}
              <ReactTypo SubTitle2={RightSubTitle2} />
            </div>
          )}
        </Stack>
      </Stack> */}

      <div style={{ flex: "1", width: "100%", textAlign: "center" }}>
        <ReactTypo
          Title={Title}
          sx={{ whiteSpace: "nowrap" }}
          TitleSx={{ fontWeight: "normal" }}
        />
        <ReactTypo
          SubTitle={RightSubTitle}
          BodyText={RightBodyText}
          sx={{ whiteSpace: "nowrap" }}
        />
        {PLText && (
          <Tag>
            {PLText}%
            {PLText > 0 ? <TrendingUpOutlined /> : <TrendingDownOutlined />}
          </Tag>
        )}
        <ReactTypo SubTitle2={RightSubTitle2} />
      </div>
    </ReactPaper>
  );
}
