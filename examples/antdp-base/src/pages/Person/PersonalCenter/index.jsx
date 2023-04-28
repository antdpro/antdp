import { Layout, Space } from 'antd';
import User from './User';
import Contents from './Contents';
const { Sider } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
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
