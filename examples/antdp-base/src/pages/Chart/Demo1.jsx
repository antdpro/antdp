import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Space, Divider } from 'antd';
import { getList } from '@/services/api';
import { useReactMutation } from '@antdp/hooks';
import { headData, data, config } from './item';
import { TinyArea, TinyColumn, Progress, Line } from '@ant-design/charts';
import 'antd/dist/reset.css';
import Priture from './priture';
import Pillar from './pillar';

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
    <Space
      direction="vertical"
      size="middle"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Row>
        {headData.map((item, i) => (
          <Col
            key={i}
            xl={6}
            lg={8}
            md={12}
            sm={24}
            xs={24}
            style={{ display: 'flex' }}
          >
            <Card loading={isLoading} style={{ width: 250 }}>
              <div>
                <div>{item.title}</div>
                <div style={{ fontSize: 24 }}>{item.pice}</div>
                <div>
                  {item.id === 1 && (
                    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                      周同比12% 日同比11%
                    </div>
                  )}
                  {item.id === 2 && <TinyArea {...config} />}
                  {item.id === 3 && <Priture />}
                  {item.id === 4 && <Pillar />}
                </div>
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
