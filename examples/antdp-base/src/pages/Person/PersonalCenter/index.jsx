import { Layout, Space } from 'antd';
import Contents from './Contents';
import User from './User';
const { Sider } = Layout;

const contentStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',
};
const siderStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
};

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Sider width={400} style={siderStyle}>
        <User />
      </Sider>
      <Layout style={contentStyle}>
        <Contents />
      </Layout>
    </Layout>
  </Space>
);
export default App;
