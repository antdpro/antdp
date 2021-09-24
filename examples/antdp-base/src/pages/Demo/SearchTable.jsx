import React, { useRef, useState } from 'react';
import { useTableResizable } from '@/hooks';
import { Card, Table, Space, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { QuickForm, ButtonGroupPro } from '@antdp/antdp-ui';
import { baseItems, columns } from './item';
import { asyncAwaitForm } from '@/utils/utils';
import { selectPage } from '@/services/api';

const SearchTable = () => {
  const baseRef = useRef();
  const [filter, setFilter] = useState(null);

  const { submit, loading, dataSource, ...otherTableProps } = useTableResizable(
    selectPage,
    (query) => {
      return {
        queryData: {
          ...query,
        },
      };
    },
  );

  const handleOk = async () => {
    const info = await asyncAwaitForm(baseRef.current);
    if (info?.errorFields) {
      return;
    }
    submit(info);
    setFilter(info);
  };

  return (
    <Space direction="vertical" style={{ display: 'block' }}>
      <Card size="small">
        <QuickForm
          ref={baseRef}
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
                  onClick: handleOk.bind(this),
                },
                {
                  type: 'primary',
                  label: '重制',
                },
              ]}
            />
          </Col>
        </Row>
      </Card>
      <Card size="small">
        <Table
          {...otherTableProps}
          rowSelection={null}
          bordered
          columns={columns}
          dataSource={dataSource}
          loading={loading}
        />
      </Card>
    </Space>
  );
};
export default SearchTable;
