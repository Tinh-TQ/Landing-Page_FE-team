import React from 'react';
import { Typography } from 'antd';
import '../../Common.css';
import '../Change1.css';

const { Title } = Typography;

const TextCommon = (value: string) => {
  return <Title className='text'>{value}</Title>;
};

export default TextCommon;
