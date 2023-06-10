import { getList } from '@/services/api';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useReactMutation } from '@antdp/hooks';
import { Avatar, Card, Col, Row, Skeleton, Space } from 'antd';
import { useEffect, useState } from 'react';
import { applyItems } from './item';

export default function () {
  const [data, setData] = useState([]);

  const { mutate, isLoading } = useReactMutation({
    method: 'POST',
    url: getList,
    onSuccess: ({ data: results = [] }) => {
      setData([...data, ...results]);
    },
  });

  useEffect(() => {
    mutate();
  }, []);
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Row>
        {applyItems.map((item, i) => (
          <Col key={i} xl={12} lg={12} md={12} sm={12} xs={12} style={{ marginBottom: 12 }}>
            <Card
              loading={isLoading}
              style={{ width: 360 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton avatar description title={false} loading={isLoading} active>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  <div style={{ marginLeft: 10 }}>{item.title}</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    fontSize: 24,
                    alignContent: 'center',
                    justifyItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ color: '#969696', fontSize: 12 }}>活跃用户</div>
                    <div>
                      {item.maxNum}
                      <span style={{ fontSize: 18 }}>万</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#969696', fontSize: 12 }}>新增用户</div>
                    <div>{item.minNum}</div>
                  </div>
                </div>
              </Skeleton>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
}
