import { ProCard } from '@ant-design/pro-components';
import Contents from './Contents';
import User from './User';

const contentStyle = {
  textAlign: 'center',
};
const siderStyle = {
  textAlign: 'center',
  color: '#fff',
};

const App = () => (
  <ProCard>
    <ProCard width={400} style={siderStyle}>
      <User />
    </ProCard>
    <ProCard style={contentStyle}>
      <Contents />
    </ProCard>
  </ProCard>
);
export default App;
