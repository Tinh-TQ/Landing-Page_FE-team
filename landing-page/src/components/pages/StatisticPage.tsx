import React from 'react'
import Line from '../Line'
import Statistics from '../Statictis'
import { StatisticValue } from '../../constants/config/statistic'


const StatisticPage = () => {
  return (
    <div className='section__counter'>
        <Line/>
        <Statistics values={StatisticValue}/>
        <Line/>
    </div>
  )
}

export default StatisticPage