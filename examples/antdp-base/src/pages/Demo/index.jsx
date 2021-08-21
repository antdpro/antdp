import React, { useRef } from 'react';
import {
  Card,
  Input,
  Button,
  Table,
  Form,
  Space,
  DatePicker,
  Row,
  Col,
} from 'antd';
import 'antd/dist/antd.css';
import { QuickForm, ButtonGroupPro } from '@antdp/antdp-ui';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import { baseItems, columns } from './item';

const data = [];
for (let i = 0; i < 20; i++) {
  data[i] = {
    key: i,
    order: i,
    messageType: '系统消息',
    messageObj: '用户注册',
    messageName: '首次注册，欢迎登录',
  };
}

const Demo = () => {
  const baseRef = useRef();
  //处理表单ref异步
  const asyncAwaitForm = async (form) => {
    return (
      (form &&
        form.validateFields &&
        form
          .validateFields()
          .then(async (vals) => {
            return vals;
          })
          .catch((errorInfo) => {
            return errorInfo;
          })) ||
      {}
    );
  };

  const handleOk = async () => {
    const info = await asyncAwaitForm(baseRef.current);
    console.log('info', info);
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
        <ButtonGroupPro
          button={[
            {
              type: 'primary',
              label: '新增',
              onClick: () => { },
            },
            {
              type: 'primary',
              label: '导出',
              onClick: () => { },
            },
          ]}
        />
        <Table bordered columns={columns()} size="small" dataSource={data} />
      </Card>
    </Space>
  );
};

export default connect(({ loading }) => ({
  loading: loading,
}))(Demo);
