import { Box, Typography } from "@mui/material";
import { lightText } from "../../Utilites/Const";

export default function ReactTypo({
  MainHeading,
  Heading,
  Title,
  SubTitle,
  SubTitle2,
  BodyText,
  children,
  sx,
}) {
  return (
    <Box>
      {MainHeading && (
        <Typography variant="h4" fontWeight={700} sx={sx}>
          {MainHeading}
          {children}
        </Typography>
      )}

      {Heading && (
        <Typography variant="h5" fontWeight={700} sx={sx}>
          {Heading}
          {children}
        </Typography>
      )}

      {Title && (
        <Typography variant="h6" fontWeight={700} sx={sx}>
          {Title}
          {children}
        </Typography>
      )}
      {SubTitle && (
        <Typography variant="subtitle2" fontWeight={600} sx={sx}>
          {SubTitle}
        </Typography>
      )}
      {SubTitle2 && (
        <Typography variant="subtitle2" color={lightText} sx={sx}>
          {SubTitle2}
        </Typography>
      )}
      {BodyText && (
        <Typography variant="body1" sx={sx}>
          {BodyText}
        </Typography>
      )}
    </Box>
  );
}
