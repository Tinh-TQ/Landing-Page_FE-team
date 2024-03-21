import React from 'react';
import { Image } from 'antd';
import { ImageType } from '../../interfaces';
import '../Common.css';

type ImageCardProps = {
  data: ImageType;
  state: string;
  className?: string;
};

const ImageCard = ({ data, state, className = '' }: ImageCardProps) => {
  const { src, alt } = data;
  return (
    <>
      <Image.PreviewGroup items={[`${src}`]}>
        <Image
          src={src}
          alt={alt}
          className={`image image-${state} ${className}`}
        />
      </Image.PreviewGroup>
    </>
  );
};

export default ImageCard;
