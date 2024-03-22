import { Divider, Flex, Typography } from 'antd';
import React from 'react';
import CardContent from '../CardContent';
import { CardContentProps } from '../../interfaces';
import SegmentsCard from '../SegmentsCard';
import { segmentValue } from '../../constants/config/SegmentValues';
import Line from '../Line';

type CardPageProps = {
  data: CardContentProps[];
};

const { Paragraph } = Typography;

const CardPage = ({ data }: CardPageProps) => {
  return (
    <>
      <div className='header'>
        <Paragraph className='color-text'>Our Products</Paragraph>
        <Divider>From Top Qualities Materials</Divider>
      </div>
      <div className='pill'>
        <SegmentsCard values={segmentValue} />
      </div>
      <Flex justify='center' align='center' gap='large'>
        {data.map(value => (
          <CardContent data={value.data} contentHard={value.contentHard} />
        ))}
      </Flex>
      <div className='end-page'>
        <Line />
      </div>
    </>
  );
};

export default CardPage;
