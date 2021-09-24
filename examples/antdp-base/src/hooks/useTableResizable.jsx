import { useState, useMemo, useEffect } from 'react';
import { useRequest, useUpdateEffect, useBoolean } from 'ahooks';

// 提取封装table属性， 模仿ahooks里的use-antd-table
// https://ahooks.js.org/hooks/table/use-antd-table
export default function useTableResizable(
  fetchList,
  formatParams,
  formatDataSource,
  manual = true,
) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // eslint-disable-next-line
  const [selectedRows, setSelectedRows] = useState([]);
  // 默认每页加载20条
  const [pageSize, setPagesize] = useState(20);
  // 默认第一页
  const [page, setPage] = useState(1);
  // 存储查询条件数据
  const [queryData, setQueryData] = useState({});
  // 是否是分页重置
  const [isPageRest, { setTrue, setFalse }] = useBoolean(false);

  // 调取接口
  const result = useRequest(fetchList, {
    defaultPageSize: 20,
    paginated: true,
    // 手动调用接口
    manual: true,
  });

  const { run } = result;

  formatDataSource = formatDataSource ? formatDataSource : (val) => val;

  // 首次加载
  useEffect(() => {
    if (manual === false) {
      run({
        pageSize,
        page,
        ...(formatParams ? formatParams(queryData) : queryData),
      });
    }
  }, []);

  // 加载参数 首次不加载
  useUpdateEffect(() => {
    // console.log('列表数据', ...(formatParams? formatParams(...queryData) : queryData));

    if (!isPageRest) {
      setFalse();
      run({
        pageSize,
        page,
        ...(formatParams ? formatParams(queryData) : queryData),
      });
    }
  }, [page, pageSize, isPageRest]);

  // 提交
  const submit = (queryData) => {
    // console.log('提交列表数据', queryData, pageSize, page);
    setPage(1);
    setQueryData(queryData);
    setTrue();
    run({
      pageSize,
      page: 1,
      ...(formatParams ? formatParams(queryData) : queryData),
    });
  };

  // 重置
  const reset = (queryData) => {
    setPage(1);
    setQueryData(queryData);
    setTrue();
    run({
      pageSize,
      page: 1,
      ...(formatParams ? formatParams(queryData) : queryData),
    });
  };

  // 页数修改
  const onShowSizeChange = (current, pageSize) => {
    setFalse();
    setPagesize(pageSize);
    setPage(1);
    setSelectedRowKeys([]);
    setSelectedRows([]);
  };
  // 点击页码事件
  const onChangePage = (page) => {
    setFalse();
    setPage(page);
    setSelectedRowKeys([]);
    setSelectedRows([]);
  };

  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
  };

  const dataSource = useMemo(() => {
    if (result.data && result.data.code === 1) {
      if (Array.isArray(result.data.data)) {
        return formatDataSource(result.data.data);
      } else {
        return formatDataSource(
          (result.data.data && result.data.data.rows) || [],
        );
      }
    }
    return [];
  }, [result]);

  // antd 表格属性
  return {
    selectedRowKeys,
    selectedRows,
    submit,
    reset,
    bordered: true,
    ...result,
    dataSource,
    pagination: {
      ...result.pagination,
      total:
        result.data &&
        result.data.data &&
        result.data.code === 1 &&
        result.data.data.total,
      pageSizeOptions: ['20', '50', '150', '200'],
      showSizeChanger: true,
      // size: 'small',
      showTotal: () => `总共: ${result.data.data.total} 条`,
      onShowSizeChange: onShowSizeChange,
      onChange: onChangePage,
      pageSize,
      current: page,
    },
    rowSelection: {
      onChange: handleSelectChange,
      selectedRowKeys,
    },
  };
}
