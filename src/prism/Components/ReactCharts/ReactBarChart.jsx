import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import {
  dataset,
  primary,
  orange,
  success,
  primary2,
} from "../../Utilites/Const";

const chartSetting = {
  borderRadius: 0,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function ReactBarChart({ width, height = 264 }) {
  return (
    <BarChart
      dataset={dataset}
      width={width}
      height={height}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "month",
          categoryGapRatio: 0.6,
          barGapRatio: 0.7,
        },
      ]}
      series={[
        {
          dataKey: "london",
          // label: "London",
          valueFormatter,
          color: primary,
        },
        { dataKey: "paris", valueFormatter, color: primary2 },
        // {
        //   dataKey: "newYork",
        //   label: "New York",
        //   valueFormatter,
        //   color: orange,
        // },
      ]}
      {...chartSetting}
    />
  );
}
