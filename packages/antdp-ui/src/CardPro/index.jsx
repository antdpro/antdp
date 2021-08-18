import React, { Component } from 'react';
import classNames from 'classnames';
import { Card } from 'antd';
import './index.css';

export default class CardPro extends Component {
  render() {
    const { children, className, ...otherProps } = this.props;
    return (
      <Card className={classNames(className, 'and-KCardPro')} {...otherProps}>
        {children}
      </Card>
    );
  }
}
