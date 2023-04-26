import { Avatar, Button, List, Skeleton, Space } from 'antd';
import { useEffect, useState } from 'react';
import styles from './style.less';
import { useReactMutation } from '@antdp/hooks';
import CardDes from '@/components/CardDes';

const fakeDataUrl = `https://randomuser.me/api/?results=${10}&inc=name,gender,email,nat,picture&noinfo`;

const App = () => {
  const [data, setData] = useState([]);
  const {
    mutate,
    data: result,
    isLoading,
  } = useReactMutation({
    method: 'GET',
    url: fakeDataUrl,
    onSuccess: ({ results }) => {
      setData([...data, ...results]);
    },
  });
  useEffect(() => {
    mutate();
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes title="简单列表" description="简单列表请求" />
      <List
        className={styles.demo_loadmore_list}
        loading={isLoading}
        itemLayout="horizontal"
        loadMore={
          !isLoading && (
            <div
              style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
              }}
            >
              <Button onClick={() => mutate()}>加载更多</Button>
            </div>
          )
        }
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">more</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={isLoading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={
                  <a href="https://antdpro.github.io/antdp/#/home/home">
                    {item.name?.last}
                  </a>
                }
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </Space>
  );
};
export default App;
