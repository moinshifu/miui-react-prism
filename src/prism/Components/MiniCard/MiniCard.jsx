import { Avatar, Stack, Typography, styled } from "@mui/material";
import { TrendingUpOutlined, TrendingDownOutlined } from "@mui/icons-material";
import { primary, success, alert, primaryLight } from "../../Utilites/Const";
import ReactTypo from "../ReactTypo/ReactTypo";
import ReactPaper from "../ReactPaper/ReactPaper";
export default function MiniCard({
  Heading,
  Title,
  icon,
  SubTitle2,
  block,
  AvatarSize,
  RightSubTitle,
  RightSubTitle2,
  RightBodyText,
  PLText,
  Action,
}) {
  const Tag = styled(Typography)(() => ({
    color: PLText >= 0 ? success : alert,
    fontWeight: 700,
    fontSize: "15px",
    display: "flex",
    minHeight: '30px'
  }));
  return (
    <ReactPaper>
      <Stack
        spacing={2}
        direction={block ? "column" : "row"}
        alignItems={block ? "flex-start" : "center"}
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
          </div>
          {Action}
        </Stack>

        <Stack spacing={2} direction={"row"} sx={{ width: "100%" }}>
          <div style={{ flex: "1", width: "100%" }}>
            <ReactTypo Heading={Heading} Title={Title} />
            <ReactTypo SubTitle2={SubTitle2} sx={{ whiteSpace: "nowrap" }} />
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
      </Stack>
    </ReactPaper>
  );
}
