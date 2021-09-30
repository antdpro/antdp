import React, { useRef, useState } from 'react';
import { useTableResizable } from '@/hooks';
import { Card, Table, Space, Row, Col, Form } from 'antd';
import 'antd/dist/antd.css';
import { QuickForm, ButtonGroupPro } from '@antdp/antdp-ui';
import { baseItems, columns } from './item';
import { asyncAwaitForm } from '@/utils/utils';
import { selectPage } from '@/services/api';
import { useTable } from '@antdp/hooks';

const SearchTable = () => {
  const baseRef = useRef();
  const [form] = Form.useForm();

  const { tableProps, search } = useTable(selectPage, {
    form,
    formatResult: (req) => {
      if (req.code === 1) {
        return {
          list: req.data.rows,
          total: req.data.total,
        };
      }
    },
    defaultParams: [
      { current: 1, pageSize: 20 },
      { name2: '123', name3: '' },
    ],
  });

  const { submit, reset } = search;

  return (
    <Space direction="vertical" style={{ display: 'block' }}>
      <Card size="small">
        <QuickForm
          form={form}
          type="CardPro"
          colspan={4}
          formDatas={baseItems()}
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
