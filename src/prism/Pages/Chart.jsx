import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, primary, orange, success } from "../Utilites/Const";

const chartSetting = {
  borderRadius: 50,
  yAxis: [
    // {
    //   label: "rainfall (mm)",
    // },
  ],

  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "month",
          categoryGapRatio: 0.5,
          barGapRatio: 0.4,
        },
      ]}
      series={[
        {
          dataKey: "london",
          label: "London",
          valueFormatter,
          color: primary,
        },
        { dataKey: "paris", label: "Paris", valueFormatter, color: success },
        {
          dataKey: "newYork",
          label: "New York",
          valueFormatter,
          color: orange,
        },
      ]}
      {...chartSetting}
    />
  );
}
