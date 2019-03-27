import React from 'react';
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  LabelList,
} from 'recharts';

const Chart2Custom = ({ data }) => {
  return (
    <>
      <p>
        YAxis/XAxis{' '}
        <code>
          hide={'{'}true{'}'}
        </code>
        <br />
        Legend <code>align="right" verticalAlign="top"</code>
        <br />
        Bar{' '}
        <code>
          barSize={'{'}20{'}'}, legendType="circle/star", isAnimationActive=
          {'{'}false{'}'}
        </code>
      </p>
      <BarChart width={730} height={250} data={data}>
        <XAxis dataKey="hobby" hide={true} />
        <YAxis hide={true} />
        <Tooltip />
        <Legend align="right" verticalAlign="top" />
        <Bar
          barSize={20}
          isAnimationActive={false}
          dataKey="trophies"
          legendType="circle"
          fill="#8884d8"
        />
        {/*

        if components share repeating properties, like these bars, we can extract them using javascript object spread notation:

        const commonBarProps = {barSize: 20, isAnimationActive: false}

        <Bar {...commonBarProps} dataKey="age"/>

        */}
        <Bar
          barSize={20}
          isAnimationActive={false}
          dataKey="age"
          legendType="star"
          fill="#82ca9d"
        />
      </BarChart>

      <p style={{ paddingTop: 60 }}>
        Stacked Bar Chart
        <br />
        Bar <code>stackId="stack-1"</code>
      </p>
      <BarChart width={730} height={250} data={data}>
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip />
        <Legend />
        <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8" />
        <Bar dataKey="age" stackId="stack-1" fill="#82ca9d" />
      </BarChart>

      <p>
        Horizontal Bar Chart
        <br />
        BarChart <code>layout="vertical"</code>
        <br />
        must explicitly set XAxis, YAxis{' '}
        <code>type="category" or "number"</code>
      </p>
      <BarChart width={730} height={250} data={data} layout="vertical">
        <XAxis type="number" hide={true} />
        <YAxis dataKey="name" type="category" hide={true} />
        <Tooltip />
        <Legend />
        <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8" />
        <Bar dataKey="age" stackId="stack-1" fill="#82ca9d" />
      </BarChart>

      <p>
        Reversed
        <br />
        XAxis{' '}
        <code>
          reversed={'{'}true{'}'}
        </code>
      </p>
      <BarChart width={730} height={250} data={data} layout="vertical">
        <XAxis type="number" reversed={true} hide={true} />
        <YAxis dataKey="name" type="category" hide={true} />
        <Tooltip />
        <Legend />
        <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8" />
        <Bar dataKey="age" stackId="stack-1" fill="#82ca9d" />
      </BarChart>

      <p>
        Axis Label and LabelList
        <br />
        YAxis/XAxis > Label child component
        <br />
        Bar > LabelList child component
      </p>
      <BarChart width={730} height={250} data={data} layout="vertical">
        <XAxis type="number">
          <Label
            value="Hey I'm a Label Over Here"
            offset={0}
            position="bottom"
          />
        </XAxis>
        <YAxis dataKey="name" type="category" hide={true} />
        <Tooltip />
        <Legend wrapperStyle={{ bottom: -20 }} />
        <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8">
          <LabelList dataKey="trophies" />
        </Bar>
        <Bar dataKey="age" stackId="stack-1" fill="#82ca9d">
          <LabelList dataKey="age" />
        </Bar>
      </BarChart>

      <p>LabelList positions</p>
      <BarChart
        width={730}
        height={250}
        data={data}
        layout="vertical"
        margin={{ left: 40 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" hide={true} />
        <Tooltip />
        <Legend wrapperStyle={{ bottom: -20 }} />
        <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8">
          <LabelList dataKey="age" position="left" />
        </Bar>
        <Bar dataKey="age" stackId="stack-1" fill="#82ca9d">
          <LabelList dataKey="age" position="right" />
        </Bar>
      </BarChart>

      <p>Custom LabelList with valueAccessor function</p>
      <BarChart width={730} height={250} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" hide={true} />
        <Tooltip />
        <Legend wrapperStyle={{ bottom: -20 }} />
        <Bar dataKey="trophies" stackId="stack-1" fill="#8884d8" />
        <Bar dataKey="age" stackId="stack-1" fill="#82ca9d">
          <LabelList
            valueAccessor={entry => {
              console.log(entry);
              return `${entry.name} likes ${entry.hobby}`;
            }}
          />
        </Bar>
      </BarChart>
    </>
  );
};

export default Chart2Custom;
