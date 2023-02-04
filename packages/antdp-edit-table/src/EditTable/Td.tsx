import React from 'react';
import { Tooltip } from 'antd';
import RcForm from 'rc-field-form';
import { getItem, getFieldId, toArray } from './utils';
import { ColumnsProps, EditableCellItemProps } from "./interface"

export interface EditableCellProps {
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
  isList,
  listAttr,
  ...restProps
}: EditableCellProps) => {

  const renders: EditableCellItemProps["children"] = getItem({ attr, type, inputNode });

  const _render = () => {
    // 使用 List 时  isList===true  && inputNode 是方法
    if (isList && typeof inputNode === 'function') {
      return (
        <RcForm.List {...listAttr} name={dataIndex}>
          {(fields, operation, meta) =>
            inputNode(
              fields.map((field) => ({ ...field, fieldKey: field.key })),
              operation,
              meta,
            )
          }
        </RcForm.List>
      );
    }
    return (
      <EditableCellItem
        {...itemAttr}
        name={dataIndex}
        rules={rules}
        preName={record[rowKey]}
        itemValue={record}
        children={renders}
        tipAttr={tipAttr}
        tip={tip}
      />
    );
  };

  return (<td {...restProps}>{editing ? _render() : children}</td>);
};

export const EditableCellItem = (props: EditableCellItemProps) => {
  const {
    name,
    rules,
    preName = '',
    itemValue,
    children,
    tipAttr = {},
    tip,
    ...rest
  } = props;

  return (
    <RcForm.Field {...rest} name={name} rules={rules}>
      {(control, meta, form) => {
        const mergedName = toArray(name).length && meta ? meta.name : [];
        const fieldId = getFieldId(mergedName, preName);
        const onChange = (event: any) => {
          let value = event;
          if (event && event.target) {
            value = event.target.value;
          }
          control.onChange(value);
        };
        const childNode =
          typeof children === 'function'
            ? children({ ...control, id: fieldId }, meta, form, {
              record: itemValue,
            })
            : React.isValidElement(children)
              ? React.cloneElement(children as React.ReactElement, {
                ...control,
                onChange: onChange,
                id: fieldId,
              })
              : children;
        const errs = meta.errors.map((err) => err).join(',');
        return (
          <Tooltip
            color="#fff"
            overlayInnerStyle={{ color: 'red' }}
            {...tipAttr}
            title={tip ? tip(errs) : errs}
            open={!!meta.errors.length}
          >
            {childNode}
          </Tooltip>
        );
      }}
    </RcForm.Field>
  );
};





export default EditableCell;
