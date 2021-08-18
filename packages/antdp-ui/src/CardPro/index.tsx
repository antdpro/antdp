import React, { Component } from 'react';
import classNames from 'classnames';
import { Card, CardProps } from 'antd';
import './index.css';

export interface CarProProps extends CardProps {
  children?: React.ReactNode;
  className?: string;
}
export default class CardPro extends Component<CarProProps> {
  render() {
    const { children, className, ...otherProps } = this.props;
    return (
      <Card className={classNames(className, 'antdp-KCardPro')} {...otherProps}>
        {children}
      </Card>
    );
  }
}
