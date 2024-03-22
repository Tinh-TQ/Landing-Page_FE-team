import React from 'react';
import './App.css';
import Layout from './components/Layout';

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
<<<<<<< HEAD
    <div className='App'>
      {/* <CardContent data={data} contentHard={contentHard} /> */}

      <CardPage data={MockDataArray} />
=======
    <div className="App">
      <Layout />
        <StatisticPage/>
>>>>>>> 6d0c2cb9d464fbe8e645a67a7cb19297aed5e11e
    </div>
  );
}

export default App;
