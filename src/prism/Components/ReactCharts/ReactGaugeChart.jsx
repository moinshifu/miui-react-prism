import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function ReactGaugeChart() {
  return (
    // <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
    <Gauge
      // width={280}
      height={265}
      value={75}
      startAngle={-90}
      endAngle={90}
      innerRadius="88%"
      outerRadius="80%"
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 42,
          fontWeight: "700",
          transform: "translate(0px, -50px)",
          display: "block",
          margin: "0 auto",
        },
      }}
      text={({ value, valueMax }) => `${value} / ${valueMax}`}
    />
  );
}
