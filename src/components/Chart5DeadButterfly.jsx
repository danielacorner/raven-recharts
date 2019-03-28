import React from 'react';
import styled from 'styled-components';
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const ButterflyStyles = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
`;

const TopWing = ({ data, width }) => (
  <BarChart
    syncId="deadButterfly1"
    width={width ? width : null}
    height={250}
    data={data}
  >
    <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={5} />
    <YAxis hide={true} />
    <Tooltip />
    <Bar
      dataKey="trophies"
      stackId="stack-1"
      fill="#8884d8"
      isAnimationActive={false}
    >
      <LabelList dataKey="age" position="bottom" offset={45} />
    </Bar>
    <Legend align="right" wrapperStyle={{ right: -120, bottom: 25 }} />
  </BarChart>
);

const BottomWing = ({ data, width }) => (
  <BarChart
    syncId="deadButterfly1"
    width={width ? width : null}
    height={250}
    data={data}
    margin={{ top: -15 }}
  >
    <XAxis dataKey="name" hide={true} />
    <Legend
      align="right"
      verticalAlign="top"
      wrapperStyle={{ right: -80, top: -25 }}
    />
    <YAxis hide={true} reversed={true} />
    <Tooltip />
    <Bar
      dataKey="age"
      stackId="stack-1"
      fill="#82ca9d"
      isAnimationActive={false}
    />
  </BarChart>
);

const Chart3Butterfly = ({ data }) => {
  return (
    <div style={{ position: 'relative' }}>
      <p>Dead Butterfly</p>
      <ButterflyStyles>
        <ResponsiveContainer width={'100%'}>
          <TopWing data={data} />
        </ResponsiveContainer>
        <ResponsiveContainer width={'100%'}>
          <BottomWing data={data} />
        </ResponsiveContainer>
      </ButterflyStyles>
    </div>
  );
};

export default Chart3Butterfly;
