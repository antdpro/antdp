import CardDes from '@/components/CardDes';
import { ProDescriptions } from '@ant-design/pro-components';
import { Card, Col, Empty, Popover, Row, Space, Steps, Table, Tabs } from 'antd';
import 'antd/dist/reset.css';
import { columns1, columns2, data1 } from './item';

const Page = () => {
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  const tables = (
    <Table columns={columns1} dataSource={data1} bordered={false} pagination={false} />
  );

  const items = [
    {
      key: '1',
      label: `操作日志一`,
      children: tables,
    },
    {
      key: '2',
      label: `操作日志二`,
      children: tables,
    },
    {
      key: '3',
      label: `操作日志三`,
      children: tables,
    },
  ];
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes title="高级详情页" description="ProDescriptions 高级详情页" />
      <Card>
        <ProDescriptions
          title="用户信息"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: {
                id: '这是一段文本columns',
                date: '20200809',
                money: '1212100',
                money3: '1212100',
                money2: -12345.33,
                state: 'all',
                switch: true,
                state2: 'open',
              },
            });
          }}
          columns={columns2}
        />
      </Card>
      <Card title="流程进度">
        <Row style={{ padding: 20 }}>
          <Col span={8}>项目 ID 23421</Col>
          <Col span={8}>负责人 曲丽丽</Col>
          <Col span={8}>生效时间 2016-12-12 ~ 2017-12-12</Col>
        </Row>
        <Steps
          current={1}
          progressDot={customDot}
          items={[
            {
              title: '创建项目',
              description: '曲丽丽 2016-12-12 12:32',
            },
            {
              title: '部门初审',
              description: '周毛毛',
            },
            {
              title: '财务复核',
            },
            {
              title: '完成',
            },
          ]}
        />
      </Card>
      <Card title="用户信息">
        <ProDescriptions
          title="基础信息"
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
          columns={columns2}
        />
        <Card type="inner" title="多层级信息组" bordered={false}>
          <ProDescriptions
            title="嵌套信息1"
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
            columns={columns2}
          />
          <ProDescriptions
            title="嵌套信息2"
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
            columns={columns2}
          />
          <ProDescriptions
            title="嵌套信息3"
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
            columns={columns2}
          />
        </Card>
      </Card>
      <Card title="用户近半年来电记录">
        <Empty />
      </Card>
      <Card>
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    </Space>
  );
};
export default Page;
