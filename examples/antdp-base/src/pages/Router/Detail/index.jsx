import React, { Component } from 'react';
import { Card, Space } from 'antd';

export default class RouterList extends Component {
  render() {
    console.log('::::List', this.props.match, this.props);
    return (
      <Space direction="vertical" style={{ display: 'block' }}>
        <Card title="获取路由参数" size="small">
          {this.props.match.id}
        </Card>
      </Space>
    );
  }
}
