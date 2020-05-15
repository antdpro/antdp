import React, { Component } from 'react';
import { Card, Space } from 'antd';

export default class RouterList extends Component {
  render() {
    return (
      <Space direction="vertical" style={{ display: 'block' }}>
        <Card title="用户设置" size="small"></Card>
      </Space>
    );
  }
}
