import React, { useRef, useState } from 'react';
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
  Drawer,
} from 'antd';
import 'antd/dist/antd.css';
import { QuickForm, ButtonGroupPro, FormDetail } from '@antdp/antdp-ui';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import { baseItems, columns, detailItems } from './item';

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
  const [visible, setVisible] = useState(false);
  const [isView, setIsView] = useState(false);
  const [fileList, setFileList] = useState([]);
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
        <Table bordered columns={columns()} size="small" dataSource={data} />
      </Card>
      <Drawer
        title="详情"
        width={800}
        closable={true}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <FormDetail
          isView={isView}
          formDatas={detailItems(fileList, setFileList)}
        />
      </Drawer>
    </Space>
  );
};

export default connect(({ loading }) => ({
  loading: loading,
}))(Demo);
