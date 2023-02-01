import React, { Component } from 'react';
import classNames from 'classnames';
import { Card } from 'antd';
import { CardProps } from 'antd/es/card';
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
