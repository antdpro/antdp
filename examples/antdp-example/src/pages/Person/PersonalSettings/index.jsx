import { Tabs } from 'antd';
import SecuritySet from './SecuritySet';
import AccountBind from './AccountBind';
import Message from './Message';
import Basic from './Basic';
const App = () => {
  const items = [
    {
      label: `基本设置`,
      key: 1,
      children: <Basic />,
    },
    {
      label: `安全设置`,
      key: 2,
      children: <SecuritySet />,
    },
    {
      label: `账号绑定`,
      key: 3,
      children: <AccountBind />,
    },
    {
      label: `新消息通知`,
      key: 4,
      children: <Message />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" tabPosition="left" items={items} />
    </div>
  );
};
export default App;
