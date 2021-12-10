useTable 用于antd Form 与 Table 联动

---

useTable封装了常用的 antd Form 与 antd Table 联动逻辑，并且同时支持 antd V3 和 V4。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { useRef, useState } from 'react';
import { Card, Table, Space, Row, Col, Form } from 'antd';
import { QuickForm, ButtonGroupPro } from '@antdp/antdp-ui';
import { baseItems, columns } from './item';
import { selectPage } from '@/services/api';
import { useTable } from '@antdp/hooks';

const SearchTable = () => {
  const baseRef = useRef();
  const [form] = Form.useForm();

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
      form,
      defaultParams: [
        { current: 1, pageSize: 20 },
        { name2: '123' },
      ],
    },
  );

  const { submit, reset } = search;

  return (
    <Space direction="vertical" style={{ display: 'block' }}>
      <Card size="small">
        <QuickForm
          type="CardPro"
          colspan={4}
          form={form}
          formDatas={[
             {
              label: '消息对象',
              name: 'name2',
              type: 'input',
             }
          ]}
        />
        <Row>
          <Col
            span={24}
            style={{
              textAlign: 'right',
            }}
          >
            <ButtonGroupPro
              button={[
                {
                  type: 'primary',
                  label: '搜索',
                  onClick: submit,
                },
                {
                  type: 'primary',
                  label: '重置',
                  onClick: reset,
                },
              ]}
            />
          </Col>
        </Row>
      </Card>
      <Card size="small">
        <Table {...tableProps} bordered rowKey="id" columns={columns} />
      </Card>
    </Space>
  );
};
export default SearchTable;

```
<!--End-->

### Props

[完整的参数参考](https://ahooks.js.org/zh-CN/hooks/table/use-antd-table)

