import React from 'react'
import Line from '../Line'
import Statistics from '../Statictis'
import { StatisticValue } from '../../constants/config/statistic'

type Props = {}

const StatisticPage = (props: Props) => {
  return (
    <div>
        <Line/>
        <Statistics values={StatisticValue}/>
        <Line/>
    </div>
  )
}

export default StatisticPage