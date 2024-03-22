import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import { CardContentProps } from '../interfaces';
import { Card, Divider, Flex, Typography } from 'antd';
import ImageCard from './common/ImageCard';
import ButtonCard from './common/ButtonCard';

const { Paragraph } = Typography;
const { Title } = Typography;
const { Text } = Typography;

const { Meta } = Card;

const CardContent = ({ data, contentHard }: CardContentProps) => {
  const { contentHeader, contentRateStar, contentText, view, price } =
    contentHard;
  return (
    <>
      <div className='card-container'>
        <div className='img-card-container'>
          <ImageCard data={data} state='right' className='image-card' />
        </div>
        <Card hoverable style={{ width: 240 }}>
          <Meta title={contentHeader} />
          <Flex align='center' className='content' gap='small'>
            <StarOutlined className='bg-yellow icon' />
            <Title level={4} className='h4-title'>
              {contentRateStar}
            </Title>
            <Text>(${view} reviews)</Text>
          </Flex>
          <Paragraph>{contentText}</Paragraph>
          <div className='footer'>
            <Flex gap='large' align='space-evenly'>
              <Title>${price}</Title>
              <ButtonCard className='btn-card' />
            </Flex>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardContent;
