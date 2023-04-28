import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Space, Divider } from 'antd';
import { getList } from '@/services/api';
import { useReactMutation } from '@antdp/hooks';
import { headData } from './item';
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
  console.log('data', data);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Row>
        {headData.map((item, i) => (
          <Col
            key={i}
            xl={6}
            lg={8}
            md={12}
            sm={24}
            xs={24}
            style={{ marginBottom: 12 }}
          >
            <Card loading={isLoading} style={{ width: 250 }}>
              <div>
                <div>{item.title}</div>
                <div style={{ fontSize: 24 }}>{item.pice}</div>
                <Divider />
                <div>{item.foot}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
}
