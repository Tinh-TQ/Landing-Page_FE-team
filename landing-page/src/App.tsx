import React from 'react';
import './App.css';
import { Row } from 'antd';
import Line from './components/Line';
import Statistics from './components/Statictis';
import { StatisticValue } from './constants/config/statistic';
import './components/Common.css';
import StatisticPage from './components/pages/StatisticPage';

function App() {
  return (
    <div className="App">
        <StatisticPage/>
    </div>
  );
}

export default App;
