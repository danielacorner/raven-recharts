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
      <p>Basic</p>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="age" fill="#8884d8" />
      </BarChart>

      <p>Multiple Bars (third bar is non-numeric)</p>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="trophies" fill="#8884d8" />
        <Bar dataKey="age" fill="#82ca9d" />
        <Bar dataKey="hobby" fill="#bada55" />
      </BarChart>

      <p>
        YAxis <code>dataKey="trophies"</code>, XAxis{' '}
        <code>dataKey="hobby"</code>
      </p>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="1 9" />
        <XAxis dataKey="hobby" />
        <YAxis dataKey="trophies" />
        <Tooltip />
        <Legend />
        <Bar dataKey="trophies" fill="#8884d8" />
        <Bar dataKey="age" fill="#82ca9d" />
        <Bar dataKey="hobby" fill="#bada55" />
      </BarChart>
    </>
  );
};

export default Chart1Basic;
