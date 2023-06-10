import CardDes from '@/components/CardDes';
import { ProDescriptions } from '@ant-design/pro-components';
import { Card, Space } from 'antd';
import 'antd/dist/reset.css';

const Page = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes
        title="ProDescriptions"
        description="ProDescriptions 高级描述列表组件，提供一个更加方便快速的方案来构建描述列表"
      />
      <Card>
        <ProDescriptions
          title="用户信息"
          dataSource={{
            id: '这是一段文本columns',
            date: '20200809',
            money: '1212100',
            money3: '1212100',
            money2: -12345.33,
            state: 'all',
            switch: true,
            state2: 'open',
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
              dataIndex: 'date2',
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
              dataIndex: 'mone3',
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
        <ProDescriptions
          title="客户信息"
          dataSource={{
            id: '这是一段文本columns',
            date: '20200809',
            money: '1212100',
            money3: '1212100',
            money2: -12345.33,
            state: 'all',
            switch: true,
            state2: 'open',
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
    </Space>
  );
};
export default Page;
