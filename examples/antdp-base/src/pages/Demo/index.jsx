import React, { useRef } from 'react';
import { Card, Space, Row, Col, Drawer } from 'antd';
import 'antd/dist/antd.css';
import { QuickForm, ButtonGroupPro, FormDetail } from '@antdp/antdp-ui';
import { detailItems } from './item';
import SearchTable from './SearchTable';
import { useModel } from 'umi';

const Demo = () => {
  const {
    drawerVisible,
    setTrue,
    setFalse,
    queryInfo,
    setInfo,
    isView,
    setIsView,
  } = useModel('demo', (model) => ({
    ...model,
  }));

  return (
    <Space direction="vertical" style={{ display: 'block' }}>
      <Card size="small">
        <ButtonGroupPro
          button={[
            {
              type: 'primary',
              label: '新增',
              onClick: () => {
                setTrue();
                setIsView(false);
              },
              path: '/demo/add1',
            },
            {
              type: 'primary',
              label: '详情',
              onClick: () => {
                setTrue();
                setIsView(true);
              },
            },
            {
              label: 'Menu',
              type: 'primary',
              menu: [
                {
                  key: '1',
                  label: '新增内部业务',
                  onClick: () => {},
                  path: '/demo/add2',
                },
                {
                  key: '2',
                  label: '新增外部业务',
                  onClick: () => {},
                  path: '/demo/add3',
                },
              ],
            },
          ]}
        />
      </Card>
      <SearchTable />
      <Drawer
        title="详情"
        width={800}
        closable={true}
        onClose={() => setFalse()}
        visible={drawerVisible}
      >
        <FormDetail
          isView={isView}
          formDatas={detailItems({
            isView,
            queryInfo,
            setInfo,
          })}
        />
      </Drawer>
    </Space>
  );
};
export default Demo;
