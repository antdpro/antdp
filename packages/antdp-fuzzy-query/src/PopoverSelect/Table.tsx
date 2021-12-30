import React from "react"
import { Table, TableProps, SelectProps } from "antd"
import "./index.css"

export interface TablesProps extends TableProps<any> {
  value: SelectProps<any>["value"];
  width: number,
  onClick: (item: any, isCheck: boolean) => void
  mode: SelectProps<any>["mode"];
  labelInValue: boolean;
  fieldNames?: SelectProps<any>["fieldNames"];
}

const getCheck = (item: any, value: TablesProps["value"], mode: any, labelInValue: boolean, fieldNames: SelectProps<any>["fieldNames"]) => {
  const valueField = fieldNames && fieldNames.value || "value"

  if (["tags", "multiple"].includes(mode) && Array.isArray(value)) {
    const fig = value.find(it => {
      if (labelInValue && it) {
        return it[valueField] === item[valueField]
      }
      return it === value
    })
    if (fig) {
      return true
    }
  } else {
    if (labelInValue && value) {
      return value[valueField] === item[valueField]
    } else {
      return value === item
    }
  }
  return false
}

export default (props: TablesProps) => {
  const { value, width, onClick, mode, labelInValue, fieldNames, ...rest } = props
  const getCheckMome = React.useCallback(getCheck, [JSON.stringify(value)])
  const onRow = (record: any) => {
    const check = getCheckMome(record, value, mode, labelInValue, fieldNames)
    return {
      onClick: () => onClick(record, !check),
      style: check && { background: "#e6f7ff" } || {}
    }
  }
  const valueField = React.useMemo(() => fieldNames && fieldNames.value || "value", [])

  return <div className="fuzzy-query-table" >
    <Table
      rowKey={valueField}
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