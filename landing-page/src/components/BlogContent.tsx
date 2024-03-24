import React from 'react';
import { UserOutlined, CalendarFilled, RightOutlined } from '@ant-design/icons';
import { BlogContentProps } from '../interfaces';
import { Card, Divider, Flex, Typography } from 'antd';
import ImageCard from './common/ImageCard';

const { Paragraph } = Typography;
const { Text } = Typography;
const { Meta } = Card;

const BlogContent = ({ data, contentHard }: BlogContentProps) => {
  const { contentHeader, authorBlog, viewDetail, date } =
    contentHard;
  return (
    <>
      <div className='blog-container'>
        <div className='img-blog-container'>
          <ImageCard data={data} state='right' className='image-card blog-card ' />
        </div>
        <Card hoverable style={{ width: 320, margin: '12px auto', borderRadius: '0 0 0 40px' }}>
          <Flex align='center' className='content' gap='small' style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              <UserOutlined className='bg-black icon' />
              <Meta title={authorBlog} style={{ fontSize: '14px' }} className='small' />
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <CalendarFilled classID='icon' />
              <Text>{date}</Text>
            </div>
          </Flex>
          <Paragraph style={{ fontSize: '24px', textAlign: 'left' }}>{contentHeader}</Paragraph>
          <div className='footer'>
            <Flex gap='large' align='space-evenly' style={{justifyContent: 'flex-end', alignItems:"center"}} className='arrow-icon'>
              <Text>{viewDetail} <RightOutlined className='icon arrow-icon' /></Text>
            </Flex>
          </div>
        </Card>
      </div>
    </>
  );
};

export default BlogContent;
