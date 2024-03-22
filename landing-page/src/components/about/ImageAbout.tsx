import { Flex } from 'antd';
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
        <ImageCard
          data={imageAbout[0]}
          state='right'
          className='mg-top size-about'
          width='230'
          height='200'
          top='45'
          left='-10'
        />
        <ImageCard
          data={imageAbout[1]}
          state='left'
          className='size-about'
          left='-10'
          width='230'
          height='200'
        />
      </Flex>
    </>
  );
};

export default ImageAbout;
