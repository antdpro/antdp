EditTable 编辑表格
===

### 依赖安装

```bash
 npm i @antdp/edit-table
```
### 基本使用
```tsx  mdx:preview
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
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

const EditableTable =() => {
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
            <div style={{marginBottom:10}} >
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
    <div>
      <EditTable
       initValue={{ address: 2193 }}
        onValuesChange={(list) => setData(list)}
        rowKey="key"
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        {...tableProps}
      />
    </div>
  );
};
export default EditableTable
```

### 操作列在第一列
```tsx  mdx:preview
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
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

const EditableTable =() => {
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
    <div>
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
    </div>
  );
};
export default EditableTable
```

### 显示删除按钮
```tsx  mdx:preview
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
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

const EditableTable =() => {
  const [data, setData] = React.useState(originData);
  const [tableProps, setTableProps] = React.useState({
    isAdd: true,
    isOpt: true,
    isOptDelete:true,
    optIsFirst: false,
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
      type: 'Custom',
      rules: [{ required: true, message: '请输入' }],
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
    <div>
      <EditTable
        initValue={{ address: 2193}}
        onValuesChange={(list) => setData(list)}
        rowKey="key"
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        isAdd={true}
        {...tableProps}
      />
    </div>
  );
};
export default EditableTable
```

### 允许同时编辑多行
```tsx  mdx:preview
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
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

const EditableTable =() => {
  const [data, setData] = React.useState(originData);
  const [tableProps, setTableProps] = React.useState({
    isAdd: true,
    isOpt: true,
    isOptDelete:true,
    optIsFirst: false,
    multiple:true
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
      type: 'Custom',
      rules: [{ required: true, message: '请输入' }],
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
    <div>
      <EditTable
        initValue={{ address: 2193}}
        onValuesChange={(list) => setData(list)}
        rowKey="key"
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        isAdd={true}
        {...tableProps}
      />
    </div>
  );
};
export default EditableTable
```

### 无操作和新增
```tsx  mdx:preview
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
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

const EditableTable =() => {
  const [data, setData] = React.useState(originData);
  const [tableProps, setTableProps] = React.useState({
    isOpt: false,
    isAdd:false,
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
      type: 'Custom',
      rules: [{ required: true, message: '请输入' }],
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
    <div>
      <EditTable
        initValue={{ address: 2193}}
        onValuesChange={(list) => setData(list)}
        rowKey="key"
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        isAdd={true}
        {...tableProps}
      />
    </div>
  );
};
export default EditableTable
```

### API
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| columns | 列 | `ColumnsProps[]`  | - |
| onSave | 保存数据 | `(data: any[], row: any, record?: any, indx?: number) => void`  | - |
| onBeforeSave | 保存数据之前校验 | ` (item: any, record: any, index: number) => boolean`  | - |
| rowKey | 主键 | `string`  | - |
| optIsFirst | 操作列是放在首位还是最后 | `boolean`  | - |
| isOpt | 是否需要操作列 | `boolean`  | - |
| optConfig | 操作配置 | `ColumnsProps`  | - |
| isOptDelete | 操作是否需要 删除 按钮 | `boolean`  | - |
| isAdd | 是否存在新增按钮 | `boolean`  | - |
| initValue | 新增初始值 | `any`  | - |
| onBeforeAdd | 新增之前判断 | `() => boolean`  | - |
| onErr | 行报错信息 | `(err: ValidateErrorEntity<any>) => void`  | - |
| onValuesChange | 表单值更新事件 | `(list:any) => void`  | - |
| multiple | 是否可以多行编辑 | `boolean`  | - |
| addBtnProps | 新增按钮配置 | `ButtonProps`  | - |
| store | form 存储表单 | `Store`  | - |

### ColumnsProps
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| editable | 是否编辑 | `boolean`  | - |
| inputNode | 自定义 渲染编辑组件 | `(...arg: any[]) => React.ReactNode \| React.ReactNode`  | - |
| rules | 规则 | `Rule[]`  | - |
| itemAttr | formItem 表单 其他属性值 | `Omit<FieldProps, 'rules' \| 'label' \| 'name'>`  | - |
| attr | formItem 表单 children 中组件参数 | `Partial<ItemChildAttr<any, any>>`  | - |
| type | 组件类型 | `ItemChildType`  | - |
| tip | 错误提示 | `(errs: string) => React.ReactNode`  | - |
| tipAttr | Tooltip 组件属性 | `TooltipProps`  | - |
| isList | 是否是 List | `boolean`  | - |
| listAttr | List 组件参数 | `Omit<ListProps, 'children' \| 'name'>`  | - |
| render | 自定义 渲染(列原始默认的自定义渲染,加了个 other 参数，不是编辑状态下的表格渲染)  ， other 参数 只有操作列才有 | `(value: any,record: any,index: number,other?: OtherProps) => React.ReactNode \| RenderedCell<any>`  | - |

### OtherProps
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| editingKey | 编辑中字段 | `any[]`  | - |
| editable | 编辑中字段 | `boolean`  | - |
| newAdd | 当前行 是否编辑 | `any[]`  | - |
| isNewAdd | 是否新增的 | `boolean`  | - |
| save | 保存 ，`key:主键` ，`record：行数据`，`index:下标` | `(key: string \| number, record: any, indx: number) => void`  | - |
| cancel | 取消 ， `id：主键` | `(id: string \| number) => void`  | - |
| onDelete | 删除 ，`id：主键`， `rowItem 当前行数据` ，`index:下标` | `(id: string \| number, rowItem: any, index: number) => void`  | - |
| edit | 编辑 按钮 ，`record 当前行数` | `(record: any) => void`  | - |

### ref 返回值

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| save | 保存 | `(key: string, record: any, indx: number) => void`  | - |
| onDelete | 删除 | `(id: string \| number, rowItem: any, index: number) => void`  | - |
| edit | 编辑 | `(record: any) => void`  | - |
| cancel | 取消编辑 | `(key: string \| number) => void`  | - |
| add | 新增 | `() => void`  | - |
| isEditing | 是否编辑中 | `(record: any) => boolean`  | - |
| editingKey | 编辑 id | `(string \| number)[]`  | - |
| newAdd | 是否编辑 新增的数据 | `(string \| number)[]`  | - |
| forms | 收集 所有 表单 | `Store`  | - |

### Item 组件参数
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| preName | 当前行数据存储父级的name list时不用传 | `string`  | - |
| itemValue | 当前行的所有数据 | `any`  | - |
| tipAttr | Tooltip 组件属性 | `TooltipProps`  | - |
| tip | 错误提示 | `(errs: string) => React.ReactNode`  | - |
| children | 进行覆写 方法时 新增一个 行参数 v | `React.ReactNode`  | - |


