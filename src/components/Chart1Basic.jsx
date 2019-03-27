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
    <>
      <div className="title" />
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="age" fill="#8884d8" />
      </BarChart>

      <BarChart width={730} height={250} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="trophies" fill="#8884d8" />
        <Bar dataKey="age" fill="#82ca9d" />
      </BarChart>

      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="1 9" />
        <XAxis dataKey="hobby" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="trophies" fill="#8884d8" />
        <Bar dataKey="age" fill="#82ca9d" />
      </BarChart>

      <BarChart width={730} height={250} data={data}>
        <XAxis dataKey="hobby" type="category" hide={true} />
        <YAxis hide={true} />
        <Tooltip />
        <Legend align="right" verticalAlign="top" />
        <Bar dataKey="trophies" fill="#8884d8" />
        <Bar dataKey="age" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default Chart1Basic;
