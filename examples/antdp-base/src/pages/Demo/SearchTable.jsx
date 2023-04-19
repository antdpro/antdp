import React, { useRef, useState } from 'react';
import { Card, Table, Space, Row, Col, Form } from 'antd';
import { QuickForm, ButtonGroupPro } from '@antdp/antdp-ui';
import { baseItems, columns } from './item';
import { selectPage } from '@/services/api';
import { useTable } from '@antdp/hooks';
import { getChildFormItemFun } from '@antdp/antdp-ui/lib/QuickForm';
const SearchTable = () => {
  const baseRef = useRef();
  const [form] = Form.useForm();
  // 获取form表单隐藏方法
  const [hide] = QuickForm.useFormItemHide();
  // 获取form表单内部 状态更新方法
  const { updateValue } = getChildFormItemFun(form);

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
        { name2: '123', name3: '' },
      ],
    },
  );

  const { submit, reset } = search;

  // 表单变更
  const onValuesChange = (value) => {
    if (value && value.name2 === '1234') {
      // 组件显示
      hide.updateValue('name3', false);
    } else if (value && 'name2' in value) {
      // 更新表单 name3 内部存储的值  值可以是初始值 可以是其他的
      updateValue('name3', undefined);
      // 组件隐藏
      hide.updateValue('name3', true);
    }
  };

  return (
    <Space direction="vertical" style={{ display: 'block' }}>
      <Card size="small">
        <QuickForm
          type="CardPro"
          colspan={4}
          form={form}
          // 与 form 参数类似
          formHide={hide}
          // 组件显示隐藏初始值
          initialHide={{ name3: true }}
          formDatas={baseItems()}
          onValuesChange={onValuesChange}
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
