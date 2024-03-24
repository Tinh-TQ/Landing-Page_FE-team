import React, { Component } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../Common.css';

type State = {};
type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    children?: string
}
// type ButtonSize = "small" | "medium";

export default class Button extends Component<Props, State> {
    render() {
        const { text, disable, className, children = 'explore product' } = this.props
        const value = text || children
        return (
            <div className='btn arrow-icon' style={{ marginTop: '26px' }}>
                <div className='btn-name'>{value}</div>
                <ArrowRightOutlined style={{ fontSize: '34px', color: '#fff' }} className='arrow-icon'/>
            </div>
        )
    }
}
