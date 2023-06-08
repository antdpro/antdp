import { ButtonGroupPro, FormDetail } from '@antdp/antdp-ui';
import { useModel } from '@umijs/max';
import { Drawer } from 'antd';
import 'antd/dist/reset.css';
import { useMemo } from 'react';
import { detailItems } from './item';
import { ProTable } from '@ant-design/pro-components';
import { columns } from './item';
import { selectPage } from '@/services/api';

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
    <div>
      <ProTable
        headerTitle="列表"
        options={false}
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => (
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
        )}
        request={async (params = {}) => {
          const { code, data } = await selectPage(params);
          if (code && code === 200) {
            return {
              data: data.rows || [],
              total: data.total,
              success: true,
            };
          }
        }}
        pagination={{
          showSizeChanger: true,
        }}
        cardProps={{
          size: 'small',
          style: {
            padding: 0,
          },
        }}
        cardBordered
        columns={columns}
        rowKey="id"
      />
      <Drawer
        title="详情"
        width={800}
        closable={true}
        onClose={() => setFalse()}
        open={drawerVisible}
      >
        <FormDetail isView={isView} formDatas={data} />
      </Drawer>
    </div>
  );
};
export default Demo;
