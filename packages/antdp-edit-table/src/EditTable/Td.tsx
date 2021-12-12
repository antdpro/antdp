import React from 'react';
import { Tooltip } from 'antd';
import RcForm from 'rc-field-form';
import { getItem, getFieldId, toArray } from './utils';
import { ColumnsProps } from "./interface.d"

export interface EditableCellProps {

}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  inputNode,
  rules,
  children,
  itemAttr,
  type,
  attr,
  tip,
  tipAttr,
  multiple,
  rowKey,
  ...restProps
}: {
  editing: boolean;
  dataIndex: string;
  title: ColumnsProps["title"];
  record: any;
  index: number;
  inputNode: ColumnsProps["inputNode"];
  rules: ColumnsProps["rules"];
  children: React.ReactNode;
  itemAttr: ColumnsProps["itemAttr"];
  type: ColumnsProps["type"];
  attr: ColumnsProps['attr'];
  tip: ColumnsProps["tip"];
  tipAttr: ColumnsProps["tipAttr"];
  multiple: boolean;
  rowKey: string;
  [x: string]: any;
}) => {
  const renders = getItem({ attr, type, inputNode });
  return (
    <td {...restProps}>
      {editing ? (
        <RcForm.Field
          {...itemAttr}
          name={dataIndex}
          rules={rules}
        >
          {(control, meta, form) => {
            const mergedName =
              toArray(dataIndex).length && meta ? meta.name : [];
            const fieldId = getFieldId(mergedName, record[rowKey]);
            const onChange = (event: any) => {
              let value = event;
              if (event && event.target) {
                value = event.target.value;
              }
              control.onChange(value);
            };
            const childNode =
              typeof renders === 'function'
                ? renders({ ...control, id: fieldId }, meta, form, { record })
                : React.isValidElement(renders)
                  ? React.cloneElement(renders as React.ReactElement, {
                    ...control,
                    onChange: onChange,
                    id: fieldId,
                  })
                  : renders;
            const errs = meta.errors.map((err) => err).join(',');
            return (
              <Tooltip
                color="#fff"
                overlayInnerStyle={{ color: 'red' }}
                {...tipAttr}
                title={tip ? tip(errs) : errs}
                visible={!!meta.errors.length}
              >
                {childNode}
              </Tooltip>
            );
          }}
        </RcForm.Field>
      ) : (
        children
      )}
    </td>
  );
};
export default EditableCell;
