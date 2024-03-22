import React, { Component } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

type State = {};
type Props = {
  text?: string;
  disable?: boolean;
  className?: string;
  onClick?: Function;
  children?: string;
};
// type ButtonSize = "small" | "medium";

export default class Button extends Component<Props, State> {
  render() {
    const {
      text,
      disable,
      className,
      onClick,
      children = 'explore product',
    } = this.props;
    const value = text || children;
    return (
      <div className='btn'>
        <div className='btn-name'>{value}</div>
        <ArrowRightOutlined style={{ fontSize: '34px', color: '#fff' }} />
      </div>
    );
  }
}
