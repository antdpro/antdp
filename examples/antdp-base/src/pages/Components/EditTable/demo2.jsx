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
    // address: `London Park no. ${i}`,
  });
}

const EditableTable = () => {
  const [data, setData] = React.useState(originData);
  const [tableProps, setTableProps] = React.useState({
    isAdd: true,
    isOpt: true,
    optIsFirst: true,
  });
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '20%',
      editable: true,
      type: 'Custom',
      inputNode: (edit) => {
        return <Input {...edit} />;
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
      type: 'Input',
      // rules: [{ required: true, message: '请输入' }],
      inputNode: (edit) => {
        return <Input {...edit} />;
      },
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
    <Card title="操作列在第一列">
      <EditTable
        initValue={{ address: 2193 }}
        onValuesChange={(list) => setData(list)}
        rowKey="key"
        optIsFirst={true}
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        isAdd={true}
        {...tableProps}
      />
    </Card>
  );
};
export default EditableTable;
