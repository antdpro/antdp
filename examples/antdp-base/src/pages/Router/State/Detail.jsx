import React, { Component } from 'react';
import { Card, Space } from 'antd';

export default class StateDetail extends Component {
  render() {
    console.log(':::StateDetail:List', this.props.match, this.props);
    return (
      <Space direction="vertical" style={{ display: 'block' }}>
        <Card title="参数详情测试" size="small">
          test
        </Card>
      </Space>
    );
  }
}
