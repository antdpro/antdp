import { FormDetail } from '@antdp/antdp-ui';
import { Card, Space, Table, Steps } from 'antd';
import CardDes from '@/components/CardDes';
import 'antd/dist/reset.css';
import { useMemo } from 'react';
import { detailItems, userItems } from './item';

const Page = () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: '年龄',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '地址',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];
  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  const description = 'antdp 超好用.';

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes
        title="详情表单"
        description="@antdp/antdp-ui 超快速生成详情表单"
      />
      <Card>
        <FormDetail isView={true} header="仓库管理" formDatas={detailItems} />
      </Card>
      <Card>
        <FormDetail isView={true} header="任务管理" formDatas={userItems} />
      </Card>
      <Card>
        <h3>用户列表</h3>
        <Table columns={columns} dataSource={tableData} />
      </Card>
      <Card>
        <h3>任务进度</h3>
        <Steps
          current={1}
          items={[
            {
              title: '完成',
              description,
            },
            {
              title: '进行中',
              description,
              subTitle: '00:00:08',
            },
            {
              title: '结束',
              description,
            },
          ]}
        />
      </Card>
    </Space>
  );
};
export default Page;
