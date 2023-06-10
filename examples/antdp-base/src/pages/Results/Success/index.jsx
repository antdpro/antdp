import { Button, Card, Col, Popover, Result, Row, Steps } from 'antd';
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
const App = () => (
  <Card>
    <Result
      status="success"
      title="提交成功"
      subTitle="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
      extra={[
        <Button type="primary" key="console">
          返回列表
        </Button>,
        <Button key="buy">查看项目</Button>,
        <Button key="buy2">打印</Button>,
      ]}
    />
    <Card
      title="项目名称"
      bordered={false}
      style={{
        backgroundColor: '#FAFAFA',
        margin: 30,
      }}
    >
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
  </Card>
);
export default App;
