import { TinyArea } from '@ant-design/charts';
import { columns, config } from './item';
import { Card, Space, Table, Form, Radio } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
import { selectPage } from '@/services/api';
import { useTable } from '@antdp/hooks';
import DemoPie from './demoPie';
import { useState } from 'react';

const Demo = () => {
  const [mode, setMode] = useState('top');
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  // 分页接口
  const { tableProps, search } = useTable(
    async (params, formData) => {
      const data = await selectPage({
        ...params,
        queryData: { ...formData },
      });
      if (data.code === 1) {
        return {
          list: data.data.rows,
          total: data.data.total,
        };
      }
    },
    {
      defaultParams: [{ current: 1, pageSize: 4 }],
    },
  );

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '48%' }}>
          <Card title="线上热门搜索">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ margin: 4 }}>搜索用户数</div>
                  <div style={{ margin: 4, fontSize: 20 }}>12,321</div>
                  <div style={{ width: 200, height: 80 }}>
                    <TinyArea {...config} />
                  </div>
                </div>
                <div>
                  <div style={{ margin: 4 }}>人均搜索次数</div>
                  <div style={{ margin: 4, fontSize: 20 }}>2.7</div>
                  <div style={{ width: 200, height: 80 }}>
                    <TinyArea {...config} />
                  </div>
                </div>
              </div>
              <div>
                <Table
                  size="small"
                  {...tableProps}
                  bordered
                  rowKey="id"
                  columns={columns}
                />
              </div>
            </div>
          </Card>
        </div>
        <div style={{ width: '48%' }}>
          <Card
            title="销售额类别占比"
            extra={
              <Radio.Group
                onChange={handleModeChange}
                value={mode}
                style={{
                  marginBottom: 8,
                }}
              >
                <Radio.Button value="top">全部</Radio.Button>
                <Radio.Button value="left">线上</Radio.Button>
                <Radio.Button value="right">门店</Radio.Button>
              </Radio.Group>
            }
          >
            <DemoPie />
          </Card>
        </div>
      </div>
    </Space>
  );
};
export default Demo;
