import React from 'react';
import { TableProps, TooltipProps, ButtonProps } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { FieldProps } from 'rc-field-form/lib/Field';
import { RenderedCell } from 'rc-table/lib/interface';
import { Rule, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { ItemChildAttr, ItemChildType } from './utils';
import Store from './Store';
import { FormInstance, Meta } from 'rc-field-form/lib/interface';
import { ListProps } from 'rc-field-form/lib/List';

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


/**  Item 组件  渲染的单个内部FromItem组件  */
export interface EditableCellItemProps extends Omit<FieldProps, 'label' | "children"> {
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

export interface EditFormsProps {
  /** 状态保存 */
  formsRef: Store;
  onValuesChange: (
    /** 主键 */
    id: string | number,
    /**  当前行的 form  */
    form: FormInstance,
    /** form  onValuesChange 中参数 value  */
    value: any,
    /** form  onValuesChange 中参数 allValue  */
    allValue: any,
  ) => void;
  dataSource: readonly any[];
  rowKey: string | number;
}