import HeaderLandingPage from '../common/HeaderLandingPage';
import { Flex } from 'antd';
import ContentAbout from '../about/ContentAbout';
import ImageAbout from '../about/ImageAbout';
import '../Common.css';
import Button from '../commons/Button';

const AboutPage = () => {
  return (
    <>
      <div className='container-about'>
        <HeaderLandingPage content='About us' header='Why we are the best' />
        <Flex gap={100} justify='center' align='center' className='mg-top flex-about'>
          <ContentAbout className='mg-right width-50 height-80' />
          <ImageAbout className='image-about' />
        </Flex>
        <Button text='Read More' />
      </div>
    </>
  );
};

export default AboutPage;
