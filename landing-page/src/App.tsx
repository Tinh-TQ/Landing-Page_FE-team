import React from 'react';
import './App.css';
import { Row } from 'antd';
import Line from './components/Line';
import Statistics from './components/Statictis';
import { StatisticValue } from './constants/config/statistic';
import './components/Common.css';
import StatisticPage from './components/pages/StatisticPage';
import SegmentsCard from './components/SegmentsCard';
import { segmentValue } from './constants/config/SegmentValues';
import ImageCard from './components/common/ImageCard';
import { MockDataArray, imageContent } from './constants/config/ImageCard';
import CardContent from './components/CardContent';
import { MockData } from './constants/config/ImageCard';
import ButtonCard from './components/common/ButtonCard';
import CardPage from './components/pages/CardPage';

function App() {
  const { data, contentHard } = MockData;
  return (
    <div className='App'>
      {/* <CardContent data={data} contentHard={contentHard} /> */}

      <CardPage data={MockDataArray} />
    </div>
  );
}

export default App;
