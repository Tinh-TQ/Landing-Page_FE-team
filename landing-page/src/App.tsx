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
import CardContent from './components/CardContent';
import {
  MockData,
  imageContent,
  mockTestimonialCardData,
} from './constants/config/ImageCard';
import ButtonCard from './components/common/ButtonCard';
import CardPage from './components/pages/CardPage';
import ContentAbout from './components/about/ContentAbout';
import ImageAbout from './components/about/ImageAbout';
import AboutPage from './components/pages/AboutPage';
import TestimonialCard from './components/testimonial/TestimonialCard';
import TestimonialPage from './components/pages/TestimonialPage';

function App() {
  return (
    <div className='App'>
      {/* <Layout /> */}
      {/* <TestimonialCard dataImage={imageContent} name='Michael Wong' star={5} /> */}
      <TestimonialPage data={mockTestimonialCardData} />
    </div>
  );
}

export default App;
