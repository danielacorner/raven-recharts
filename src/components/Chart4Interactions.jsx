import React from 'react';
import {
  ScatterChart,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
  LineChart,
  Line,
  Scatter,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  Brush,
  AreaChart,
  Area,
} from 'recharts';

// TODO: linked tiny line charts
// TODO: reference line annotations http://recharts.org/en-US/examples/LineChartWithReferenceLines
// TODO: highlight and zoom http://recharts.org/en-US/examples/HighlightAndZoomLineChart
// TODO: AreaChartFillByValue http://recharts.org/en-US/examples/AreaChartFillByValue
// TODO: LegendEffectOpacity http://recharts.org/en-US/examples/LegendEffectOpacity

const Chart4Interactions = ({ data }) => {
  const commonProps = {
    data,
    width: 730,
    height: 200,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  };

  return (
    <>
      <p>Tooltip with custom cursor</p>
      <ScatterChart
        width={730}
        height={250}
        margin={{ top: 20, right: 20, bottom: 10, left: 40 }}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="age" unit=" years" />
        <ZAxis
          dataKey="trophies"
          name="I've won "
          unit=" trophies"
          range={[40, 800]}
        />
        <Scatter
          name="Couponners"
          data={data.filter(d => d.hobby === 'couponning')}
          fill="#8884d8"
        />
        <Scatter
          name="Other"
          data={data.filter(d => d.hobby !== 'couponning')}
          fill="#82ca9d"
        />
        <Legend />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Brush dataKey="age" height={30} stroke="#8884d8" />
      </ScatterChart>

      <p>
        Synchronized Charts <br />
        <code>syncId="your_id_here"</code>
      </p>
      <LineChart syncId="syncGroup1" {...commonProps}>
        <XAxis dataKey="name" hide={true} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="trophies"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <LineChart syncId="syncGroup1" {...commonProps}>
        <XAxis dataKey="name" hide={true} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="age" stroke="#82ca9d" />
        <Brush />
      </LineChart>

      <AreaChart syncId="syncGroup1" {...commonProps}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Area type="monotone" dataKey="age" stroke="#82ca9d" fill="#82ca9d" />
        <Area
          type="monotone"
          dataKey="trophies"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>

      <p>ReferenceLine, ReferenceDot, ReferenceArea</p>
      <ScatterChart
        {...commonProps}
        margin={{ ...commonProps.margin, bottom: 40 }}
      >
        <XAxis dataKey="trophies" type="number" name="stature" />
        <YAxis dataKey="age" type="number" unit="yr" />
        <Scatter name="A school" data={data} fill="#8884d8" />
        <ReferenceLine x={2} stroke="green" label="Middlin'" />
        <ReferenceLine
          y={150}
          alwaysShow={true}
          label="Maximum"
          stroke="red"
          strokeDasharray="3 3"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      </ScatterChart>

      <ScatterChart
        {...commonProps}
        margin={{ ...commonProps.margin, bottom: 40 }}
      >
        <XAxis dataKey="trophies" type="number" name="stature" />
        <YAxis dataKey="age" type="number" unit="yr" />
        <Scatter name="A school" data={data} fill="#8884d8" />
        <ReferenceDot
          x={5}
          y={50}
          r={20}
          fill="red"
          stroke="none"
          label="Target"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      </ScatterChart>

      <ScatterChart
        {...commonProps}
        margin={{ ...commonProps.margin, bottom: 40 }}
      >
        <XAxis dataKey="trophies" type="number" name="stature" />
        <YAxis dataKey="age" type="number" unit="yr" />
        <Scatter name="A school" data={data} fill="#8884d8" />
        <ReferenceArea
          x1={2}
          x2={4}
          y1={20}
          y2={50}
          stroke="red"
          strokeOpacity={0.3}
          label="Groan Zone"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      </ScatterChart>
    </>
  );
};

export default Chart4Interactions;
