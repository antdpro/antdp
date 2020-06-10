import React, { Component } from 'react';
import { Card, Space, Button } from 'antd';

export default class RouterList extends Component {
  gotoHandle = () => {
    const { history } = this.props;
    history.push({
      pathname: '/router/state/detail',
      query: { a: 2332 },
      state: { recordId: null },
    });
  };
  render() {
    return (
      <Space direction="vertical" style={{ display: 'block' }}>
        <Card title="State 参数传递" size="small">
          <Button onClick={this.gotoHandle}>跳转</Button>
        </Card>
      </Space>
    );
  }
}
