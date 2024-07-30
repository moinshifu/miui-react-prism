import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function ReactGaugeChart() {
  return (

      // <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
      <Gauge
      width={250}

      height={250}
  value={75}
  startAngle={-110}
  endAngle={110}
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 40,
      transform: 'translate(0px, 0px)',
      display: 'block',
      margin: '0 auto'
    
    },
  }}
  text={
     ({ value, valueMax }) => `${value} / ${valueMax}`
  }
/>
  );
}