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
        wrap='wrap'
        className={`${className}`}
      >
        <ImageCard
          data={imageAbout[0]}
          state='right'
          className='mg-top size-about'
          width='230'
          height='200'
          top='50'
        />

        <ImageCard
          data={imageAbout[1]}
          state='left'
          className='size-about'
          width='230'
          height='200'
        />
      </Flex>
    </>
  );
};

export default ImageAbout;
