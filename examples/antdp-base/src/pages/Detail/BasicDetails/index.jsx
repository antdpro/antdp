import CardDes from '@/components/CardDes';
import { ProDescriptions } from '@ant-design/pro-components';
import { Card, Space, Table } from 'antd';
import 'antd/dist/reset.css';
import { columns, columns1, data, data1 } from './item';

const Page = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes title="基础详情页" description="常见于详情页的信息展示" />
      <Card>
        <ProDescriptions
          title="用户信息"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: {
                id: '这是一段文本columns',
                date: '20200809',
                date2: '20200809',
                money: '1212100',
                money3: '1212100',
                money2: -12345.33,
                state: 'all',
                switch: true,
                state2: 'open',
              },
            });
          }}
          columns={[
            {
              title: '文本',
              key: 'text',
              dataIndex: 'id',
            },
            {
              title: '状态',
              key: 'state',
              dataIndex: 'state',
              valueType: 'select',
              valueEnum: {
                all: { text: '全部', status: 'Default' },
                open: {
                  text: '未解决',
                  status: 'Error',
                },
                closed: {
                  text: '已解决',
                  status: 'Success',
                },
              },
            },
            {
              title: '状态2',
              key: 'state2',
              dataIndex: 'state2',
            },
            {
              title: '时间',
              key: 'date',
              dataIndex: 'date',
              valueType: 'date',
            },
            {
              title: '时间',
              key: 'date2',
              dataIndex: 'date2',
              valueType: 'date',
              fieldProps: {
                format: 'DD.MM.YYYY',
              },
            },
            {
              title: '开关',
              key: 'switch',
              dataIndex: 'switch',
              valueType: 'switch',
            },
            {
              title: 'money',
              key: 'money',
              dataIndex: 'money',
              valueType: 'money',
              fieldProps: {
                moneySymbol: '$',
              },
            },
            {
              title: 'money无符号',
              key: 'money3',
              dataIndex: 'money3',
              valueType: 'money',
              fieldProps: {
                moneySymbol: false,
              },
            },
            {
              title: 'money负数无符号',
              key: 'money2',
              dataIndex: 'money2',
              valueType: 'money',
              fieldProps: {
                moneySymbol: false,
              },
            },
          ]}
        />
      </Card>
      <Card>
        <h3>退货商品</h3>
        <Table
          columns={columns}
          dataSource={data}
          bordered={false}
          footer={() => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 500,
              }}
            >
              <div>总计</div>
              <div>￥61.50</div>
            </div>
          )}
          pagination={false}
        />
      </Card>
      <Card>
        <h3>退货进度</h3>
        <Table columns={columns1} dataSource={data1} bordered={false} pagination={false} />
      </Card>
    </Space>
  );
};
export default Page;
