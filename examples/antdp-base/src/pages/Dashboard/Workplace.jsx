import React, { Component } from 'react';
import { Card, Input, Button, Table, Form, Space, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import moment from 'moment';
import 'antd/dist/antd.css';

const data = [];
for (let i = 0; i < 20; i++) {
  data[i] = {
    key: i,
    order: i,
    messageType: '系统消息',
    messageObj: '用户注册',
    messageName: '首次注册，欢迎登录',
  };
}

class Workplace extends Component {
  columns = [
    {
      title: '序号',
      dataIndex: 'order',
      align: 'center',
    },
    {
      title: '消息类型',
      dataIndex: 'messageType',
      align: 'center',
    },
    {
      title: '消息对象',
      dataIndex: 'messageObj',
      align: 'center',
    },
    {
      title: '消息名称',
      dataIndex: 'messageName',
      align: 'center',
    },
    {
      title: 'push消息',
      align: 'center',
      render: (tag) => (
        <React.Fragment>
          <Button type="link">是否发送</Button>
          <Button type="link">编辑消息</Button>
        </React.Fragment>
      ),
    },
    {
      title: '短信消息',
      key: '短信消息',
      render: (tag) => <React.Fragment></React.Fragment>,
    },
  ];

  render() {
    return (
      <Space direction="vertical" style={{ display: 'block' }}>
        <Card title="工作台" size="small">
          <Form layout="inline">
            <Form.Item label="消息对象" name="ap3">
              <DatePicker.RangePicker
                initialValues={[
                  moment('2015/01/01', 'YYYY/MM/DD'),
                  moment('2015/01/01', 'YYYY/MM/DD'),
                ]}
                format="YYYY/MM/DD"
              />
            </Form.Item>
            <Form.Item label="消息对象" name="ap">
              <Input />
            </Form.Item>
            <Form.Item label="消息关键字" name="ap2">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon={<SearchOutlined />}>
                搜索
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Table bordered columns={this.columns} size="small" dataSource={data} />
      </Space>
    );
  }
}

export default connect(({ loading }) => {
  return {
    loading: loading,
  };
})(Workplace);
