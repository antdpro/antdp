import React, { useEffect, useState } from 'react';
import { Avatar, Card, Skeleton, Row, Col, Button, Space } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { getList } from '@/services/api';
import { useReactMutation } from '@antdp/hooks';
import CardDes from '@/components/CardDes';
const { Meta } = Card;

export default function () {
  const [data, setData] = useState([]);

  const {
    mutate,
    data: result,
    isLoading,
  } = useReactMutation({
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
      <CardDes title="卡片列表" description="简单卡片列表请求" />
      <Card>
        <Row>
          {data.map((item, i) => (
            <Col
              key={i}
              xl={6}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ marginBottom: 12 }}
            >
              <Card
                loading={isLoading}
                style={{ width: 250 }}
                cover={<img alt="example" src={item.image} />}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Skeleton
                  avatar
                  description
                  title={false}
                  loading={isLoading}
                  active
                >
                  <Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                  />
                </Skeleton>
              </Card>
            </Col>
          ))}
        </Row>
        {!isLoading && (
          <div
            style={{
              textAlign: 'center',
              marginTop: 12,
              height: 32,
              lineHeight: '32px',
            }}
          >
            <Button type="primary" onClick={() => mutate()}>
              加载更多
            </Button>
          </div>
        )}
      </Card>
    </Space>
  );
}
