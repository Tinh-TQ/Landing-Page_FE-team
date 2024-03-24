import { Divider, Flex, Typography } from 'antd';
import React from 'react';
import { BlogContentProps } from '../../interfaces';
import SegmentsCard from '../SegmentsCard';
import { segmentValue } from '../../constants/config/SegmentValues';
import Line from '../Line';
import BlogContent from '../BlogContent';

type BlogPageProps = {
  data: BlogContentProps[];
};

const { Paragraph } = Typography;

const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <>
      <div className='main-section'>
        <Paragraph className='title__section'>Blog</Paragraph>
        <Divider className='sub-title__section'>Read our articles</Divider>
      </div>
      <div className='blog__section'>
        <Flex justify='center' align='center' gap='large'>
          {data.map(value => (
            <div className='blogCard__boder'>
              <BlogContent data={value.data} contentHard={value.contentHard} />
            </div>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default BlogPage;
