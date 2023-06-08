import { List, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { messageItems } from './item';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  return (
    <List
      header={<div style={{ fontWeight: 500, fontSize: 18 }}>新消息通知</div>}
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={messageItems}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              defaultChecked
            />,
          ]}
        >
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.context}
          />
        </List.Item>
      )}
    />
  );
};
export default App;
