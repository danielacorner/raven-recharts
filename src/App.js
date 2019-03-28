import React from 'react';
import './App.css';
import Chart1Basic from './components/Chart1Basic';
import Chart2Custom from './components/Chart2Custom';
import Chart3Butterfly from './components/Chart3Butterfly';
import Chart4Interactions from './components/Chart4Interactions';
import Chart5DeadButterfly from './components/Chart5DeadButterfly';
// import complexData from './utils/data';

const simpleData = [
  { name: 'Janice', age: 38, hobby: 'horses', trophies: 7 },
  { name: 'Sai', age: 40, hobby: 'puzzles', trophies: 1 },
  { name: 'Ursula', age: 72, hobby: 'books', trophies: 3 },
  { name: 'Guy', age: 39, hobby: 'couponning', trophies: 3 },
  { name: 'Sioux', age: 42, hobby: 'couponning', trophies: 8 },
];

// Recharts API: http://recharts.org/en-US/api/
// Recharts examples: http://recharts.org/en-US/examples/

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="data">{JSON.stringify(simpleData)}</div>
        <div className="charts">
          {/* <Chart1Basic data={simpleData} /> */}
          {/* <Chart2Custom data={simpleData} /> */}
          {/* <Chart3Butterfly data={simpleData} /> */}
          {/* <Chart4Interactions data={simpleData} /> */}
          {/* <Chart5DeadButterfly data={simpleData} /> */}
        </div>
      </header>
    </div>
  );
};

export default App;
