import React, { Fragment } from 'react';
import { Flex, Image, ImageProps } from 'antd';
import { ImageType } from '../../interfaces';
import '../Common.css';
import styled, { css } from 'styled-components';
import { imageState } from '../../constants/config/ImageCard';
import { returnValueImageState } from '../../ultils/imageUltils';

type ImageCardProps = {
  data: ImageType;
  state: string;
  className?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const ImageCard = ({
  data,
  state,
  className = '',
  top,
  left,
  right,
  bottom,
  height,
  width,
}: ImageCardProps) => {
  const { src, alt } = data;
    console.log(returnValueImageState(state));

  const FlexStyled = styled(Flex)<{
    customBorder?: string;
    customWidth?: string;
    customHeight?: string;
    customLeft?: string;
    customRight?: string;
    customBottom?: string;
    customTop?: string;
  }>`
    .ant-image-mask {
      border-radius: ${props => props.customBorder};
      width: ${props => props.customWidth + 'px'};
      height: ${props => props.customHeight + 'px'};
      left: ${props => props.customLeft + 'px'};
      right: ${props => props.customRight + 'px'};
      bottom: ${props => props.customBottom + 'px'};
      top: ${props => props.customTop + 'px'};

    }
  `;

  return (
    <FlexStyled
      customBorder={returnValueImageState(state)}
      customBottom={bottom}
      customTop={top}
      customRight={right}
      customLeft={left}
      customHeight={height}
      customWidth={width}
    >
      <Image
        style={{ borderRadius: `${returnValueImageState(state)}` }}
        src={src}
        alt={alt}
        className={`image image-${state} ${className} `}
      />
    </FlexStyled>
  );
};

export default ImageCard;
