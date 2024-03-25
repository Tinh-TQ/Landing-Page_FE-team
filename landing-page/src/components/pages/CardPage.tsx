import { Divider, Flex, Typography } from 'antd';
import React from 'react';
import CardContent from '../CardContent';
import { CardContentProps } from '../../interfaces';
import SegmentsCard from '../SegmentsCard';
import { segmentValue } from '../../constants/config/SegmentValues';
import Line from '../Line';
import '../Common.css';
import HeaderLandingPage from '../common/HeaderLandingPage';
import { Col, Row } from 'antd';

type CardPageProps = {
  data: CardContentProps[];
};

const { Paragraph } = Typography;

const CardPage = ({ data }: CardPageProps) => {
  return (
    <>
      <HeaderLandingPage
        content='Our Products'
        header='From Top Quality Materials'
        className='header-card'
      />
      <div className='pill'>
        <SegmentsCard values={segmentValue} />
      </div>
      <Flex justify='center' align='center' gap='large'>
        <Row gutter={[16, 16]}>
          {data.map((value, index) => (
            <Col xs={24} sm={12} md={12} lg={12} xl={6} key={index}>
              <CardContent data={value.data} contentHard={value.contentHard} />
            </Col>
          ))}
        </Row>
      </Flex>
      <div className='end-page'>
        <Line />
      </div>
    </>
  );
};

export default CardPage;
