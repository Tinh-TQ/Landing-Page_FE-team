import HeaderLandingPage from '../common/HeaderLandingPage';
import { Flex, Col, Row } from 'antd';
import ContentAbout from '../about/ContentAbout';
import ImageAbout from '../about/ImageAbout';
import '../Common.css';
import Button from '../commons/Button';

const AboutPage = () => {
  return (
    <>
      <div className='container-about about__section'>
        <HeaderLandingPage content='About us' header='Why we are the best' />
        <Flex gap={100} justify='center' align='center' className='mg-top'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ContentAbout className='mg-right width-50 height-80' />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ImageAbout />
            </Col>
          </Row>
        </Flex>
        <Button text='Read More' />
      </div>
    </>
  );
};

export default AboutPage;
