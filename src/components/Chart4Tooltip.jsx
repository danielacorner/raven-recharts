import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// A basic Recharts bar chart
const Chart1Basic = ({ data }) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        formatter={(value, name, props) => {
          // props =
          //   color: "#82ca9d"
          //   dataKey: "hobby"
          //   fill: "#82ca9d"
          //   formatter: undefined
          //   name: "hobby"
          //   payload: { name: "Bane", age: 40, hobby: "running"}
          //   unit: undefined
          //   value: "running"
          return isNaN(value) ? `${props.payload.name} loves ${value}` : value;
        }}
        labelFormatter={axisLabel => {
          return axisLabel.toUpperCase();
        }}
      />
      <Legend />
      <Bar dataKey="age" fill="#8884d8" />
      <Bar dataKey="hobby" fill="#82ca9d" />
    </BarChart>
  );
};

export default Chart1Basic;
