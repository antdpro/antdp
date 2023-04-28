import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { accountItems } from './item';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
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
      header={<div style={{ fontWeight: 500, fontSize: 18 }}>账号绑定</div>}
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={accountItems}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit">绑定</a>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.context}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default App;
