import { FormDetail } from '@antdp/antdp-ui';
import {
  Card,
  Space,
  Table,
  Steps,
  Row,
  Col,
  Radio,
  Popover,
  Empty,
  Tabs,
} from 'antd';
import CardDes from '@/components/CardDes';
import 'antd/dist/reset.css';
import { detailItems, userItems, columns1, data1 } from './item';

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
    <Table
      columns={columns1}
      dataSource={data1}
      bordered={false}
      pagination={false}
    />
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
      <CardDes
        title="高级详情页"
        description="@antdp/antdp-ui 超快速生成详情表单"
      />
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '80%' }}>
            <FormDetail
              isView={true}
              header="单号：234231029431"
              formDatas={detailItems}
            />
          </div>
          <div style={{ width: '20%', textAlign: 'right' }}>
            <div style={{ textAlign: 'right' }}>
              <Radio.Group
                value="top"
                style={{
                  marginBottom: 8,
                }}
              >
                <Radio.Button>操作一</Radio.Button>
                <Radio.Button>操作二</Radio.Button>
                <Radio.Button>操作三</Radio.Button>
              </Radio.Group>
            </div>
            <Row>
              <Col style={{ marginRight: 12, textAlign: 'center' }}>
                <div>状态</div>
                <div style={{ fontSize: 24 }}>待审批</div>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <div>订单金额</div>
                <div style={{ fontSize: 24 }}>¥568.08</div>
              </Col>
            </Row>
          </div>
        </div>
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
        <FormDetail isView={true} formDatas={userItems} />
        <h4>信息组</h4>
        <Card type="inner" title="多层级信息组" bordered={false}>
          <FormDetail isView={true} header="组名称" formDatas={userItems} />
          <FormDetail isView={true} header="组名称" formDatas={userItems} />
          <FormDetail isView={true} header="组名称" formDatas={userItems} />
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
