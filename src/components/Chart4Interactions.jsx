import React from 'react';
import {
  ScatterChart,
  Scatter,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  Brush,
} from 'recharts';

const Chart4Interactions = ({ data }) => {
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
    </>
  );
};

export default Chart4Interactions;
