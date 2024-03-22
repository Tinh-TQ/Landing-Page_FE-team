import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const TextHeader = (value: string) => {
  return (
    <div>
      <Title className='card-title'>{value}</Title>
    </div>
  );
};

export default TextHeader;
