import { Avatar, Stack, Typography, styled } from "@mui/material";
import { TrendingUpOutlined, TrendingDownOutlined } from "@mui/icons-material";
import { primary, success, alert } from "../../Utilites/Const";
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
    alignItems: "center",
  }));
  return (
    <ReactPaper>
      <Stack
        spacing={2}
        direction={block ? "column" : "row"}
        alignItems={block ? "flex-start" : "center"}
      >
        <Stack spacing={2} direction={"row"} sx={{ width: "100%" }}>
          <div style={{ flex: "1", width: "100%" }}>
            <Avatar
              sx={{
                bgcolor: "#edf4fe",
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
            <ReactTypo
              Heading={Heading}
              Title={Title}
              // children={<Tag>{profit}%</Tag>}
              sx={{ position: "relative", paddingRight: "28px" }}
            />
            <ReactTypo SubTitle2={SubTitle2} />
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
                  {PLText >= 0 ? (
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
