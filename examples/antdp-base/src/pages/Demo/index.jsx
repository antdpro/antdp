import React, { useRef, useMemo } from 'react';
import { Card, Space, Row, Col, Drawer, Modal } from 'antd';
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

  const data = useMemo(() => {
    return detailItems({
      isView,
      queryInfo,
      setInfo,
    });
  }, [isView, queryInfo, setInfo]);

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
        <FormDetail isView={isView} formDatas={data} />
      </Drawer>
    </Space>
  );
};
export default Demo;
