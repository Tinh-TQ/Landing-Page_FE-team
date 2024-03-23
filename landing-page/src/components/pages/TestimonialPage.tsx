import { Col, Flex, Row } from 'antd';
import { testimonialType } from '../../interfaces';
import HeaderLandingPage from '../common/HeaderLandingPage';
import TestimonialCard from '../testimonial/TestimonialCard';

type TestimonialPageProps = {
  data: testimonialType[];
};

const TestimonialPage = ({ data }: TestimonialPageProps) => {
  return (
    <>
      <div className='container-testimonial'>
        <HeaderLandingPage content='Testimonial' header='What our buyers say' />
        <Flex
          justify='space-evenly'
          align='center'
          wrap='wrap'
          className='mg-top'
        >
          {data.map(values => (
            <TestimonialCard
              dataImage={values.dataImage}
              name={values.name}
              star={values.star}
            />
          ))}
        </Flex>
      </div>
    </>
  );
};

export default TestimonialPage;
