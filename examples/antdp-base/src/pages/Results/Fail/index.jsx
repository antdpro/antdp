import { Button, Result, Card } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
const App = () => (
  <>
    <Result
      status="success"
      title="提交失败"
      subTitle="请核对并修改以下信息后，再重新提交。"
      extra={[
        <Button type="primary" key="console">
          返回修改
        </Button>,
      ]}
    />
    <Card
      bordered={false}
      style={{
        backgroundColor: '#FAFAFA',
        margin: 30,
      }}
    >
      <h3>您提交的内容有如下错误：</h3>
      <p>
        <CloseCircleOutlined style={{ color: 'red', marginRight: 8 }} />
        您的账户已被冻结
      </p>
      <p>
        <CloseCircleOutlined style={{ color: 'red', marginRight: 8 }} />
        您的账户还不具备申请资格
      </p>
    </Card>
  </>
);
export default App;
