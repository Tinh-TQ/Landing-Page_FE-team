import { Col, Flex, Row } from 'antd';
import { ImageType } from '../../interfaces';
import HeaderLandingPage from '../common/HeaderLandingPage';
import BlogCard from '../blog/BlogCard';
import Line from '../Line';
import Button from '../commons/Button';
import '../ResponsiveApp.css';

type BlogPageProps = {
  data: ImageType[];
};

const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <>
      <div className='blog-page-container'>
        <Line className='blog-page-line' />
        <HeaderLandingPage content='Blog' header='Read our articles' />
        <Row
          gutter={[16, 16]}
          justify='space-between'
          align='middle'
          className='grid-template-blog'
        >
          {data.map(value => (
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <BlogCard data={value} />
            </Col>
          ))}
        </Row>
        <div className='btn-blog-end'>
          <Button text='Read More' className='btn-blog' />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
