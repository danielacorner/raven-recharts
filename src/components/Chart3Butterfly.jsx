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

const RightWing = ({ data, width }) => (
  <BarChart
    width={width ? width : null}
    height={250}
    data={data}
    layout="vertical"
    margin={{ left: 40, bottom: -28 }}
  >
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" hide={true} />
    <Tooltip />
    <Legend wrapperStyle={{ bottom: -20 }} />
    <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8">
      <LabelList dataKey="age" position="left" offset={9} />
    </Bar>
    <Bar dataKey="age" stackId="stack-1" fill="#82ca9d" />
  </BarChart>
);

const LeftWing = ({ data, width }) => (
  <BarChart
    width={width ? width : null}
    height={250}
    data={data}
    layout="vertical"
    margin={{ left: 40 }}
  >
    <XAxis type="number" reversed={true} />
    <YAxis dataKey="name" type="category" hide={true} />
    <Tooltip />
    <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8" />
    <Bar dataKey="age" stackId="stack-1" fill="#82ca9d" />
  </BarChart>
);

const FlexboxStyles = styled.div`
  width: 80vw;
  display: flex;
`;

const GridStyles = styled.div`
  width: 80vw;
  display: grid;
  grid-auto-flow: column;
`;

const Chart3Butterfly = ({ data }) => {
  return (
    <div style={{ position: 'relative' }}>
      <p>Right wing</p>
      <RightWing data={data} width={730} />

      <p>Left wing</p>
      <LeftWing data={data} width={730} />

      <p>
        ResponsiveContainer
        <br />
        takes the size of parent element
      </p>
      <div
        style={{
          width: '60vw',
        }}
      >
        <ResponsiveContainer width={'100%'}>
          <LeftWing data={data} />
        </ResponsiveContainer>
      </div>

      <p>Flexbox (for IE11)</p>
      <FlexboxStyles>
        <ResponsiveContainer width={'100%'}>
          <LeftWing data={data} />
        </ResponsiveContainer>
        <ResponsiveContainer width={'100%'}>
          <RightWing data={data} />
        </ResponsiveContainer>
      </FlexboxStyles>

      <p>Grid (for > IE11)</p>
      <GridStyles>
        <ResponsiveContainer width={'100%'}>
          <LeftWing data={data} />
        </ResponsiveContainer>
        <ResponsiveContainer width={'100%'}>
          <RightWing data={data} />
        </ResponsiveContainer>
      </GridStyles>
    </div>
  );
};

export default Chart3Butterfly;
