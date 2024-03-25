import { Col, Flex, Row } from 'antd';
import { testimonialType } from '../../interfaces';
import HeaderLandingPage from '../common/HeaderLandingPage';
import TestimonialCard from '../testimonial/TestimonialCard';
import Line from '../Line';

type TestimonialPageProps = {
  data: testimonialType[];
};

const TestimonialPage = ({ data }: TestimonialPageProps) => {
  return (
    <>
      <div className='container-testimonial'>
        <Line />
        <HeaderLandingPage content='Testimonial' header='What our buyers say' />
        <Flex
          justify='space-evenly'
          align='center'
          wrap='wrap'
          className='mg-top'
        >
          <Row gutter={[16, 16]}>
            {data.map(values => (
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <TestimonialCard
                  dataImage={values.dataImage}
                  name={values.name}
                  star={values.star}
                />
              </Col>
            ))}
          </Row>
        </Flex>
      </div>
    </>
  );
};

export default TestimonialPage;
