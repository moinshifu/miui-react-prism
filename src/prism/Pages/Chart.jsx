// import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { axisClasses } from "@mui/x-charts/ChartsAxis";
// import { dataset, primary, orange, success } from "../Utilites/Const";

// const chartSetting = {
//   borderRadius: 6,
//   sx: {
//     [`.${axisClasses.left} .${axisClasses.label}`]: {
//       transform: "translate(-20px, 0)",
//     },
//   },
// };

// const valueFormatter = (value) => `${value}mm`;

// export default function BarsDataset({ width, height = 220 }) {
//   return (
//     <BarChart
//       dataset={dataset}
//       width={width}
//       height={height}
//       xAxis={[
//         {
//           scaleType: "band",
//           dataKey: "month",
//           categoryGapRatio: 0.7,
//           barGapRatio: 0.2,
//         },
//       ]}
//       series={[
//         // {
//         //   dataKey: "london",
//         //   // label: "London",
//         //   valueFormatter,
//         //   color: primary,
//         // },
//         // { dataKey: "paris",  valueFormatter, color: success },
//         {
//           dataKey: "newYork",
//           // label: "New York",
//           valueFormatter,
//           color: primary,
//         },
//       ]}
//       {...chartSetting}
//     />
//   );
// }

// import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { axisClasses } from "@mui/x-charts/ChartsAxis";
// import { dataset, primary, orange, success } from "../Utilites/Const";

// const chartSetting = {
//   borderRadius: 50,
//   sx: {
//     [`.${axisClasses.left} .${axisClasses.label}`]: {
//       transform: "translate(-20px, 0)",
//     },
//   },
// };

// const valueFormatter = (value) => `${value}mm`;

// export default function BarsDataset({ width, height = 320 }) {
//   return (
//     <BarChart
//       dataset={dataset}
//       width={width}
//       height={height}
//       xAxis={[
//         {
//           scaleType: "band",
//           dataKey: "month",
//           categoryGapRatio: 0.5,
//           barGapRatio: 0.4,
//         },
//       ]}
//       series={[
//         {
//           dataKey: "london",
//           label: "London",
//           valueFormatter,
//           color: primary,
//         },
//         { dataKey: "paris", label: "Paris", valueFormatter, color: success },
//         {
//           dataKey: "newYork",
//           label: "New York",
//           valueFormatter,
//           color: orange,
//         },
//       ]}
//       {...chartSetting}
//     />
//   );
// }

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, primary, orange, success } from "../Utilites/Const";

const chartSetting = {
  borderRadius: 50,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset({ width, height = 160 }) {
  return (
    <BarChart
      dataset={dataset}
      width={width}
      height={height}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "month",
          categoryGapRatio: 0.8,
          barGapRatio: 0.4,
        },
      ]}
      series={[
        // {
        //   dataKey: "london",
        //   // label: "London",
        //   valueFormatter,
        //   color: primary,
        // },
        // { dataKey: "paris",  valueFormatter, color: success },
        {
          dataKey: "newYork",
          // label: "New York",
          valueFormatter,
          color: primary,
        },
      ]}
      {...chartSetting}
    />
  );
}
