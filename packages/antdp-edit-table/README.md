EditTable 编辑表格
===

### 依赖安装

```bash
 npm i @antdp/edit-table
```

### 编辑表格 参数

```ts

export interface EditableTableProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  /** 列 **/
  columns: ColumnsProps[];
  /** 保存数据 */
  onSave: (data: any[], row: any, record?: any, indx?: number) => void;
  /** 保存数据之前校验 */
  onBeforeSave?: (item: any, record: any, index: number) => boolean;
  /**主键  */
  rowKey: string;
  /** 操作列是放在首位还是最后 */
  optIsFirst?: boolean;
  /** 是否需要操作列 */
  isOpt?: boolean;
  /** 操作配置 */
  optConfig?: ColumnsProps;
  /** 操作是否需要 删除 按钮 */
  isOptDelete?: boolean;
  /** 新增初始值 */
  initValue?: any;
  /** 是否存在新增按钮 */
  isAdd?: boolean;
  /** 新增之前判断 */ 
  onBeforeAdd?: () => boolean;
  /** 行报错信息 */
  onErr?: (err: ValidateErrorEntity<any>) => void;
  /** 表单值更新事件 */
  onValuesChange?: (
    /** 更新后的列表值 */
    list: any[],
    /** 当前更新字段值 */
    value: any,
    /** 当前行编辑字段值 */
    allValue: any,
    /** 当前编辑主键值 */
    id: string | number,
    /**  当前行的 form  */
    form: FormInstance,
  ) => void;
  /** 是否可以多行编辑 */
  multiple?: boolean;
  /** 新增按钮配置 */
  addBtnProps?: ButtonProps;
  /** form 存储表单 */
  store?: Store;
}
```

### 表格 列参数

```ts
// 表格 列参数
export interface ColumnsProps extends ColumnType<any> {
  /** 是否编辑  */
  editable?: boolean;
  /** 自定义 渲染编辑组件 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** 规则 */
  rules?: Rule[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FieldProps, 'rules' | 'label' | 'name'>;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<ItemChildAttr<any, any>>;
  /**组件类型  */
  type?: ItemChildType;
  /** 错误提示  */
  tip?: (errs: string) => React.ReactNode;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 是否是 List */
  isList?: boolean;
  /** list 组件参数 */
  listAttr?: Omit<ListProps, 'children' | 'name'>;
  /** 自定义 渲染(列原始默认的自定义渲染,加了个 other 参数，不是编辑状态下的表格渲染)  ， other 参数 只有操作列才有 */
  render?: (
    value: any,
    record: any,
    index: number,
    other?: OtherProps,
  ) => React.ReactNode | RenderedCell<any>;
}
// ColumnsProps 中  render 中的 other 参数值
export interface OtherProps {
  /** 编辑中字段 */
  editingKey: any[];
  /** 当前行 是否编辑 */
  editable: boolean;
  /** 处于编辑状态的 新增数据 key */
  newAdd: any[];
  /** 是否新增的 */
  isNewAdd: boolean;
  /** 保存 ，key:主键 ，record：行数据，index:下标  **/
  save: (key: string | number, record: any, indx: number) => void;
  /** 取消 ， id：主键 */
  cancel: (id: string | number) => void;
  /** 删除 ，id：主键， rowItem 当前行数据 ，index:下标 */
  onDelete: (id: string | number, rowItem: any, index: number) => void;
  /** 编辑 按钮 ，record 当前行数 */
  edit: (record: any) => void;
}
```

### ref 返回值

```ts
// ref 值
export interface RefEditTableProps {
  /** 保存 */
  save: (key: string, record: any, indx: number) => void;
  /** 删除 */
  onDelete: (id: string | number, rowItem: any, index: number) => void;
  /** 编辑 */
  edit: (record: any) => void;
  /** 取消编辑 */
  cancel: (key: string | number) => void;
  /** 新增 */
  add: () => void;
  /** 是否编辑中 */
  isEditing: (record: any) => boolean;
  /** 编辑 id */
  editingKey: (string | number)[];
  /** 是否编辑 新增的数据 */
  newAdd: (string | number)[];
  /** 收集 所有 表单 */
  forms: Store;
}
```

### Item 组件参数

```ts
/**  Item 组件  渲染的单个内部FromItem组件  */
export interface EditableCellItemProps extends Omit<FieldProps, 'label'> {
  /** 当前行数据存储父级的name list时不用传 */
  preName?: string;
  /** 当前行的所有数据 */
  itemValue?: any;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 错误提示  */
  tip?: (errs: string) => React.ReactNode;
  /** 进行覆写 方法时 新增一个 行参数 v */
  children?:
  | React.ReactNode
  | ((
    control: { [name: string]: any },
    meta: Meta,
    form: FormInstance<any>,
    v?: { record: any },
  ) => React.ReactNode);
}
```



### 案例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```tsx  mdx:preview
import ReactDOM from 'react-dom';
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
import EditTable from '@antdp/edit-table';
import 'antd/dist/antd.css';
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
      <Button
        onClick={() => {
          setTableProps({
            ...tableProps,
            isOptDelete: !tableProps.isOptDelete,
          });
        }}
      >
        删除按钮
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isAdd: !tableProps.isAdd });
        }}
      >
        新增按钮
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, multiple: !tableProps.multiple });
        }}
      >
        多行编辑
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, optIsFirst: !tableProps.optIsFirst });
        }}
      >
        操作列前或后
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isOpt: !tableProps.isOpt });
        }}
      >
        无操作列
      </Button>
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