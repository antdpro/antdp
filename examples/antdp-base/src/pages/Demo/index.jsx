import React, { useRef, useState } from 'react';
import { Card, Space, Row, Col, Drawer } from 'antd';
import 'antd/dist/antd.css';
import { QuickForm, ButtonGroupPro, FormDetail } from '@antdp/antdp-ui';
import { detailItems } from './item';
import SearchTable from './SearchTable';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [isView, setIsView] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [queryInfo, setInfo] = useState({ time2: 123456 });

  return (
    <Space direction="vertical" style={{ display: 'block' }}>
      <Card size="small">
        <ButtonGroupPro
          button={[
            {
              type: 'primary',
              label: '新增',
              onClick: () => {
                setVisible(true);
                setIsView(false);
              },
              path: '/demo/add1',
            },
            {
              type: 'primary',
              label: '详情',
              onClick: () => {
                setVisible(true);
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
                  disabled: true,
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
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <FormDetail
          isView={isView}
          formDatas={detailItems(
            fileList,
            setFileList,
            isView,
            queryInfo,
            setInfo,
          )}
        />
      </Drawer>
    </Space>
  );
};
export default Demo;
