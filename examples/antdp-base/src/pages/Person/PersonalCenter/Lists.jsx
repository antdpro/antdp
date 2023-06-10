import { CommentOutlined, HeartOutlined, LikeOutlined } from '@ant-design/icons';
import { useReactMutation } from '@antdp/hooks';
import { Avatar, List } from 'antd';
import { useEffect, useState } from 'react';
import { listItems } from './item';
import styles from './style.less';

const fakeDataUrl = `https://randomuser.me/api/?results=${10}&inc=name,gender,email,nat,picture&noinfo`;

const App = () => {
  const [data, setData] = useState([]);
  const { mutate, isLoading } = useReactMutation({
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
    <List
      className={styles.demo_loadmore_list}
      loading={isLoading}
      itemLayout="horizontal"
      dataSource={listItems}
      renderItem={(item) => {
        return (
          <List.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ margin: 8 }}>{item.title}</div>
              <div
                style={{
                  margin: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'self-start',
                }}
              >
                {item.labels.map((a, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        marginRight: 6,
                        border: '1px solid #D9D9D9',
                        padding: '1px 2px',
                        fontSize: 12,
                        background: '#FAFAFA',
                      }}
                    >
                      {a}
                    </div>
                  );
                })}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  color: '#606060',
                }}
              >
                {item.content}
              </div>
              <div style={{ margin: 8 }}>
                <Avatar size={20} src="https://randomuser.me/api/portraits/women/84.jpg" />
                <span style={{ color: '#1990FF', marginLeft: 6, marginRight: 6 }}>
                  {item.name}{' '}
                </span>
                <span style={{ color: '#BFBFBF' }}> 发布 </span>
                <span style={{ color: '#1990FF', marginLeft: 6, marginRight: 6 }}>
                  https://ant.design
                </span>
                <span style={{ color: '#BFBFBF' }}>{item.time}</span>
              </div>
              <div style={{ margin: 8 }}>
                <HeartOutlined />
                <span style={{ color: '#8C8C8C', marginLeft: 8, marginRight: 8 }}>
                  {item.star}{' '}
                </span>
                <span style={{ color: '#F0F0F0', marginRight: 8 }}> | </span>
                <LikeOutlined />
                <span style={{ color: '#8C8C8C', marginLeft: 8, marginRight: 8 }}>{item.good}</span>
                <span style={{ color: '#F0F0F0', marginRight: 8 }}> | </span>
                <CommentOutlined />
                <span style={{ color: '#8C8C8C', marginLeft: 8, marginRight: 8 }}>
                  {item.mess}{' '}
                </span>
              </div>
            </div>
          </List.Item>
        );
      }}
    />
  );
};
export default App;
