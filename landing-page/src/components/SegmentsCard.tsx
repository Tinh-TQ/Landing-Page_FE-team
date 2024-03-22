import { Segmented } from 'antd';
import React from 'react';
import './Common.css';

interface SegmentsCardProps {
  values: string[];
}

const SegmentsCard: React.FC<SegmentsCardProps> = ({ values }) => {
  return (
    <Segmented options={values} size='small' className='segment color-text' />
  );
};

export default SegmentsCard;
