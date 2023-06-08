import { BetaSchemaForm } from '@ant-design/pro-components';
import { Input, Card, Space } from 'antd';
import CardDes from '@/components/CardDes';

const valueEnum = {
  all: { text: '全部', status: 'Default' },
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
    disabled: true,
  },
  processing: {
    text: '解决中',
    status: 'Processing',
  },
};

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
    tooltip: '当title为disabled时状态无法选择',
    dependencies: ['title'],
    fieldProps: (form) => {
      if (form.getFieldValue('title') === 'disabled') {
        return {
          disabled: true,
          placeholder: 'disabled',
        };
      } else {
        return {
          placeholder: 'normal',
        };
      }
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'm',
    tooltip: '当title为必填时此项将为必填',
    dependencies: ['title'],
    formItemProps(form) {
      if (form.getFieldValue('title') === '必填') {
        return {
          rules: [
            {
              required: true,
            },
          ],
        };
      } else {
        return {};
      }
    },
  },
  {
    valueType: 'dependency',
    name: ['title'],
    columns: ({ title }) => {
      return title !== 'hidden'
        ? [
            {
              title: 'title为hidden时隐藏',
              dataIndex: 'hidden',
              valueType: 'date',
              renderFormItem: () => {
                return <Input />;
              },
            },
          ]
        : [];
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createName',
    valueType: 'date',
  },
  {
    valueType: 'divider',
  },
];

export default () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes
        title="Schema Form - JSON 表单"
        description="@ant-design/pro-components SchemaForm 是根据 JSON Schema 来生成表单的工具。SchemaForm 会根据 valueType 来映射成不同的表单项。"
      />
      <Card>
        <BetaSchemaForm
          shouldUpdate={false}
          layoutType="Form"
          onFinish={async (values) => {
            console.log(values);
          }}
          columns={columns}
        />
      </Card>
    </Space>
  );
};
