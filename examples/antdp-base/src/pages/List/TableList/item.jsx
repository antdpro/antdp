export const columns = [
  {
    title: '序号',
    dataIndex: 'number',
    fixed: 'left',
    width: 90,
    hideInSearch: true,
    align: 'center',
    render: (text, record, index) => {
      return index + 1;
    },
  },
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center',
    width: 90,
  },
  {
    title: '年龄',
    dataIndex: 'title',
    align: 'center',
    width: 90,
  },
  {
    title: '地址',
    dataIndex: 'address',
    align: 'center',
    width: 90,
  },
];
