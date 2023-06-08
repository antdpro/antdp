import React from 'react';
import { Input, Col, InputNumber, Button, Select, Form, Card } from 'antd';
import EditTable from '@antdp/edit-table';
import 'antd/dist/reset.css';
const originData = [];

for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const Page = () => {
  const [data, setData] = React.useState(originData);
  const [tableProps, setTableProps] = React.useState({
    isAdd: true,
    isOpt: true,
    optIsFirst: false,
  });
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '20%',
      editable: true,
      type: 'Input',
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
      type: 'Custom',
      rules: [{ required: true, message: '请输入' }],
      inputNode: <InputNumber />,
    },
    {
      title: 'isList',
      dataIndex: 'list',
      width: '15%',
      editable: true,
      type: 'Custom',
      isList: true,
      render: (text) => {
        return (
          text &&
          (text || [])
            .filter((it) => it)
            .map((ite) => ite.first)
            .join(',')
        );
      },
      inputNode: (fields, { add, remove }, { errors }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }, index) => (
            <div style={{ marginBottom: 10 }}>
              <EditTable.Item
                key={key}
                {...restField}
                name={[name, 'first']}
                fieldKey={[fieldKey, 'first']}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: 'Missing first name',
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </EditTable.Item>
            </div>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()}>
              Add field
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      ),
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '30%',
      editable: true,
      type: 'Input',
    },
  ];
  return (
    <Card title="基本使用">
      <EditTable
        initValue={{ address: 2193 }}
        onValuesChange={(list) => setData(list)}
        rowKey="key"
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        {...tableProps}
      />
    </Card>
  );
};
export default Page;
