import React from 'react';
import { Button } from 'antd';

const ButtonDetail = () => {
  return (
    <Button type="primary" ghost className='btn-customer' style={{padding:'10px 0'}}>
      View Detail <span className='mg-left10'>&gt;</span>
    </Button>
  );
};

export default ButtonDetail;