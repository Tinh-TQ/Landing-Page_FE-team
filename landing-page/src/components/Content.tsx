import { Typography } from 'antd';
import React from 'react'

const { Text } = Typography; 



const Content = (props: string) => {
  return (
    <Text className=''>{props}</Text>
  );
}

export default Content;