import React from "react"
import { Table, TableProps, SelectProps } from "antd"
import "./index.css"

export interface TablesProps extends TableProps<any> {
  value: SelectProps<any>["value"];
  width: number,
  onClick: (item: any, isCheck: boolean) => void
  mode: SelectProps<any>["mode"];
  labelInValue: boolean;
  ValueField: string;
}

const getCheck = (item: any, value: TablesProps["value"], mode: any, labelInValue: boolean, ValueField: string) => {
  if (["tags", "multiple"].includes(mode) && Array.isArray(value)) {
    const fig = value.find(it => {
      if (labelInValue && it) {
        return it[ValueField] === item[ValueField]
      }
      return it === value
    })
    if (fig) {
      return true
    }
  } else {
    if (labelInValue && value) {
      return value[ValueField] === item[ValueField]
    } else {
      return value === item[ValueField]
    }
  }
  return false
}

export default (props: TablesProps) => {
  const { value, width, onClick, mode, labelInValue, ValueField, ...rest } = props
  const getCheckMome = React.useCallback(getCheck, [JSON.stringify(value)])
  const onRow = (record: any) => {
    const check = getCheckMome(record, value, mode, labelInValue, ValueField)
    return {
      onClick: () => onClick(record, !check),
      style: check && { background: "#e6f7ff" } || {}
    }
  }

  return <div className="fuzzy-query-table" >
    <Table
      rowKey={ValueField}
      onRow={onRow}
      size="small"
      pagination={false}
      style={{ width }}
      scroll={{ y: 300 }}
      columns={[{ dataIndex: "label", title: "名称" }, { dataIndex: "value", title: "编号" }]}
      {...rest}
    />
  </div>
}