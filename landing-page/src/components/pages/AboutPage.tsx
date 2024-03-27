import { Flex, Col, Row } from 'antd';

import HeaderLandingPage from '../common/HeaderLandingPage';
import ContentAbout from '../about/ContentAbout';
import ImageAbout from '../about/ImageAbout';
import Button from '../commons/Button';

import '../Common.css';
import '../ResponsiveApp.css';

const AboutPage = () => {
  return (
    <>
      <div className='container-about' id='aboutus'>
        <HeaderLandingPage content='About us' header='Why we are the best' />
        <Flex gap={100} justify='center' align='center' className='mg-top'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ContentAbout className='mg-right width-50 height-80' />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ImageAbout />
              {/* <StyledWrapper>
                <div className='aaa'>

                </div>
              </StyledWrapper> */}
            </Col>
          </Row>
        </Flex>
        <Button text='Read More' />
      </div>
    </>
  );
};

export default AboutPage;
