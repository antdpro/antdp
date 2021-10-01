useTable Form 与 Table 联动

---

useTable封装了常用的 antd Form 与 antd Table 联动逻辑，并且同时支持 antd V3 和 V4。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { useRef, useMemo } from 'react';
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

```
<!--End-->

### Props

[完整的参数参考](https://ahooks.js.org/zh-CN/hooks/table/use-antd-table)

