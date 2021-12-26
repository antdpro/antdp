import React from 'react';
import { Popconfirm, Typography, Space } from 'antd';
import {
  ColumnsProps,
  EditableTableProps,
  RefEditTableProps,
} from './interface';
export type { ColumnsProps, EditableTableProps, RefEditTableProps };

export interface OperationProps {
  multiple?: boolean;
  rowKey: string;
  optConfig: EditableTableProps["optConfig"];
  isEditing: (record: any) => boolean;
  isAddEdit: (record: any) => boolean;
  save: (key: string | number, record: any, indx: number) => Promise<void>;
  isOptDelete?: boolean;
  cancel: (id: string | number) => void;
  onDelete: (id: string | number, rowItem: any, index: number) => void;
  edit: (record: any) => void;
  newAdd: (string | number)[];
  editingKey: (string | number)[];
}

/** 操作列配置 */
const operation = ({
  optConfig,
  isEditing,
  isAddEdit,
  save,
  isOptDelete,
  cancel,
  onDelete,
  edit,
  newAdd,
  editingKey,
  rowKey,
  multiple,
}: OperationProps): ColumnsProps[] => [
    {
      title: '操作',
      align: 'center',
      width: 120,
      ...optConfig,
      render: (item: any, record: any, index: number) => {
        const editable = isEditing(record);
        const isNewAdd = isAddEdit(record);
        if (optConfig && optConfig.render) {
          return optConfig.render(item, record, index, {
            editable,
            isNewAdd,
            save,
            cancel,
            onDelete,
            edit,
            newAdd,
            editingKey,
          });
        }
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record[rowKey], record, index)}
              style={{ marginRight: 8 }}
            >
              保存
            </Typography.Link>
            <Popconfirm
              title="是否取消当前行编辑?"
              okText="是"
              cancelText="否"
              onConfirm={
                // 如果是新增操作的数据，进行判断 取消时使用删除方法
                isNewAdd
                  ? onDelete.bind(this, record[rowKey], record, index)
                  : cancel.bind(this, record[rowKey])
              }
            >
              <Typography.Link>取消</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <Space>
            <Typography.Link
              disabled={!!editingKey.length && !multiple}
              onClick={() => edit(record)}
            >
              编辑
            </Typography.Link>
            {isOptDelete && (
              <Popconfirm
                title="是否删除当前行数据?"
                okText="是"
                cancelText="否"
                onConfirm={() => onDelete(record[rowKey], record, index)}
              >
                <Typography.Link>删除</Typography.Link>
              </Popconfirm>
            )}
          </Space>
        );
      },
    },
  ];

export default operation;
