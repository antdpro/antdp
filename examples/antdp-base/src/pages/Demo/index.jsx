import { ButtonGroupPro, FormDetail } from '@antdp/antdp-ui';
import { useModel } from '@umijs/max';
import { Card, Drawer, Space } from 'antd';
import 'antd/dist/reset.css';
import { useEffect, useMemo } from 'react';
import SearchTable from './SearchTable';
import { detailItems } from './item';

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

  useEffect(() => {
    console.log('111111');
  }, []);

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
              path: '/demo/add2',
            },
            {
              label: 'Menu',
              type: 'primary',
              menu: [
                {
                  key: '1',
                  label: '新增',
                  onClick: () => {},
                  path: '/demo/add3',
                },
              ],
            },
          ]}
        />
      </Card>
      <div style={{ marginTop: 10 }} />
      <SearchTable />
      <Drawer
        title="详情"
        width={800}
        closable={true}
        onClose={() => setFalse()}
        open={drawerVisible}
      >
        <FormDetail isView={isView} formDatas={data} />
      </Drawer>
    </Space>
  );
};
export default Demo;
