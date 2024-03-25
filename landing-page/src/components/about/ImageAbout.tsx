import { Flex, Col, Row } from 'antd';
import ImageCard from '../common/ImageCard';
import { imageAbout } from '../../constants/config/ImageCard';

type ImageAboutProps = {
  className?: string;
};

const ImageAbout = ({ className = '' }: ImageAboutProps) => {
  return (
    <>
      <Flex
        align='center'
        justify='center'
        gap='large'
        className={`${className}`}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <ImageCard
              data={imageAbout[0]}
              state='right'
              className='mg-top size-about'
              width='230'
              height='200'
              top='45'
              left='-10'
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <ImageCard
              data={imageAbout[1]}
              state='left'
              className='size-about'
              left='-10'
              width='230'
              height='200'
            />
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default ImageAbout;
