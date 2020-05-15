import React, { Component } from 'react';
import { Card, Input, Button, Radio, Form, Space, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import moment from 'moment';
import 'antd/dist/antd.css';

class Advanced extends Component {
  onValuesChange = (_, allValues) => {
    this.props.dispatch({
      type: 'Setting/update',
      payload: { ...allValues },
    });
  };

  submit = () => {
    this.props.dispatch({ type: 'Setting/submit' });
  };

  render() {
    const { loading } = this.props;
    return (
      <Card size="small" title="参数设置">
        <Form
          layout="vertical"
          onValuesChange={this.onValuesChange}
          onFinish={this.submit}
        >
          <Form.Item name="personalOwnerCheck" label="个人可选支付方式">
            <Checkbox.Group name="">
              <Checkbox value={1}>预付</Checkbox>
              <Checkbox value={2}>到货付款</Checkbox>
              <Checkbox value={3}>回单付</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="unlabeledEnterpriseOwnerCheck"
            label="无标签企业货主可选支付方式"
          >
            <Checkbox.Group>
              <Checkbox value={1}>预付</Checkbox>
              <Checkbox value={2}>到货付款</Checkbox>
              <Checkbox value={3}>回单付</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="带手工标签企业货主可选支付方式">
            <div>
              除以上可选外，标签企业货主可选支付特权由用户-货主标签特殊开放
            </div>
          </Form.Item>
          <Form.Item name="ownerEarlyWarning" label="货主预警">
            <Radio.Group>
              <Radio value={1}>开启</Radio>
              <Radio value={2}>关闭</Radio>
            </Radio.Group>
            {/* <Switch checkedChildren="开启" unCheckedChildren="关闭" /> */}
          </Form.Item>
          <Form.Item
            name="ownerEarlyWarningMoney"
            label="货主待支付预警金额"
            extra="达到阈值后，触发货主预警"
          >
            <Input prefix="￥" suffix="元" style={{ maxWidth: 220 }} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              size="small"
            >
              保存
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default connect(({ loading }) => {
  return {
    loading: loading.effects['Setting/submit'],
  };
})(Advanced);
