import React from 'react';
import styled from 'styled-components';
import './App.css';
import Chart1Basic from './components/Chart1Basic';
// import complexData from './utils/data';

const simpleData = [
  { name: 'Janice', age: 38, hobby: 'horses', trophies: 7 },
  { name: 'Ursula', age: 72, hobby: 'books', trophies: 3 },
  { name: 'Sioux', age: 42, hobby: 'couponning', trophies: 8 },
  { name: 'Bane', age: 40, hobby: 'running', trophies: 1 },
  { name: 'Gus', age: 39, hobby: 'couponning', trophies: 3 },
];

const AppStyles = styled.div``;

const App = () => {
  return (
    <AppStyles className="App">
      <header className="App-header">
        <div className="charts">
          <Chart1Basic data={simpleData} />
          {/* <Chart2 data={simpleData} /> */}
          {/* <Chart3 data={simpleData} /> */}
          {/* <Chart4 data={simpleData} /> */}
          {/* <Chart5 data={simpleData} /> */}
        </div>
      </header>
    </AppStyles>
  );
};

export default App;
