import React, { Component } from 'react';
import { List, Space, Typography, Button } from 'antd';
import { Link } from 'umi';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class RouterList extends Component {
  render() {
    console.log('::::List', this.props.match, this.props);
    return (
      <Space direction="vertical" style={{ display: 'block' }}>
        <Button
          onClick={() => {
            this.props.history.push({
              pathname: '/router/list/3/detail',
              query: {
                a: 'b',
              },
            });
          }}
        >
          跳转
        </Button>
        <List
          header={<div>路由列表</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <Link
                to={{
                  pathname: `/router/list/${index + 1}/detail`,
                  search: '?sort=name',
                  hash: '#the-hash',
                  state: { fromDashboard: true },
                }}
                // to={`/router/list/${index + 1}/detail`}
              >
                <Typography.Text mark>{index}</Typography.Text> {item}
              </Link>
            </List.Item>
          )}
        />
      </Space>
    );
  }
}
