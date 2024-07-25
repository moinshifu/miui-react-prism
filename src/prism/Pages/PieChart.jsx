import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { primary, primary2, success, orange } from "../Utilites/Const";

const data = [
  { value: 20, label: "UI/UX", color: primary2 },
  { value: 20, label: "Visual Branding", color: orange },
  { value: 20, label: "Illustration", color: success },
  { value: 20, label: "Web Dev", color: primary },
];

const size = {
  width: 500,
  height: 250,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 16,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children} <br />
    </StyledText>
  );
}

export default function PieChartCircle() {
  return (
    <PieChart series={[{ data, innerRadius: 100, paddingAngle: 2 }]} {...size}>
      <PieCenterLabel>Top Inquiry</PieCenterLabel>
      110
    </PieChart>
  );
}
