import React from 'react';
import Line from '../Line';
import Statistics from '../Statictis';
import { StatisticValue } from '../../constants/config/statistic';

const StatisticPage = () => {
  return (
    <div className='statistic-page'>
      <Line className='statistic-line' />
      <Statistics values={StatisticValue} />
      <Line className='statistic-line' />
    </div>
  );
};

export default StatisticPage;
