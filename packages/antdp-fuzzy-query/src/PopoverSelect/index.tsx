import React from "react"
import { Popover, Select, SelectProps, Spin } from "antd"
import Table, { TablesProps } from "./Table"
import { debounce } from "lodash";
export interface FuzzyQueryProps extends SelectProps<any> {
  /** 表格标题 */
  columns?: TablesProps["columns"];
  /** 请求 */
  request: (params: any) => Promise<{ label: any, value: any, [s: string]: any }[]>
  /** 延迟时间 */
  debounceTimeout?: number
}
const columnsDefault = [{ dataIndex: "label", title: "名称" }, { dataIndex: "value", title: "编号" }];

const PopoverSelect = (props: FuzzyQueryProps) => {
  const { onChange, labelInValue = true, columns = columnsDefault, request, debounceTimeout = 800, ...rest } = props
  const [width, setWidth] = React.useState(0)
  const [fetching, setFetching] = React.useState(false);

  const [dataSource, setDataSource] = React.useState<any[]>([])

  const inputRef = React.useRef<HTMLDivElement>(null)
  React.useLayoutEffect(() => {
    if (inputRef.current) {
      const offsetWidth = inputRef.current.offsetWidth
      setWidth(offsetWidth - 30)
    }
  }, [])
  // 选中数据
  const onClick = (item: any, isCheck: boolean) => {
    const valueField = props.fieldNames && props.fieldNames.value || "value"
    let nextValue = item
    if (!labelInValue) {
      nextValue = item && item[valueField]
    }
    if (["tags", "multiple"].includes(props.mode as string)) {
      if (Array.isArray(props.value)) {
        if (isCheck) {
          // 1. 选中 直接往里面填
          nextValue = props.value.concat(nextValue)
        } else {
          nextValue = props.value.filter((it) => {
            if (labelInValue && it) {
              return it[valueField] !== nextValue[valueField]
            }
            return it !== nextValue
          })
        }
      } else {
        if (isCheck) {
          nextValue = [nextValue]
        } else {
          nextValue = []
        }
      }
    } else {
      if (!isCheck) {
        nextValue = undefined
      }
    }
    onChange && onChange(nextValue, nextValue)
  }
  const fetchRef = React.useRef(0);
  // 请求数据
  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value: any) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      if (request) {
        setFetching(true);
        request(value).then((list) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }
          setDataSource(list)
          setFetching(false);
        });
      }
    };
    return debounce(loadOptions, debounceTimeout);
  }, [request, debounceTimeout]);

  return <Popover
    trigger="click"
    placement="bottomLeft"
    content={<Table
      columns={columns}
      dataSource={dataSource}
      value={props.value}
      width={width}
      mode={props.mode}
      labelInValue={labelInValue}
      onClick={onClick}
      loading={fetching}
      fieldNames={props.fieldNames}
    />}
  >
    <div ref={inputRef} className="popover-select-warp" style={{ width: "100%" }}>
      <Select
        allowClear
        labelInValue={labelInValue}
        filterOption={false}
        style={{ width: "100%" }}
        onSearch={debounceFetcher}
        showSearch
        {...rest}
        value={props.value}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        onChange={(value, item) => onChange && onChange(value, item)}
        open={true}
        options={dataSource}
        dropdownStyle={{ display: "none" }}
      />
    </div>
  </Popover>
}
export default PopoverSelect
