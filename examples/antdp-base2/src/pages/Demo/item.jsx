import moment from 'moment';

export const columns = [
  {
    title: '序号',
    dataIndex: 'number',
    fixed: 'left',
    width: 90,
    align: 'center',
    hideInSearch: true,
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

export const detailItems = ({ isView, queryInfo, setInfo }) => [
  {
    label: '备注',
    name: 'remark',
    type: 'input',
    initialValue: 'zz爱ff',
  },
  {
    label: '水果',
    name: 'fruit',
    type: 'select',
    options: [{ label: '苹果', value: 1 }],
    initialValue: 1,
  },
  {
    label: '城市',
    name: 'citys',
    type: 'treeSelect',
    attributes: {
      treeData: [
        { label: '上海', value: 1, children: [{ label: '黄浦区', value: 11 }] },
        { label: '北京', value: 2, children: [{ label: '西城区', value: 21 }] },
      ],
      allowClear: true,
      dropdownStyle: { maxHeight: 400, overflow: 'auto' },
    },
    initialValue: 21,
  },
  {
    label: '蔬菜',
    name: 'fruits',
    type: 'radio',
    options: [
      { label: '青菜', value: 1 },
      { label: '黄瓜', value: 2 },
    ],
    initialValue: 2,
  },
  {
    label: '蔬菜',
    name: 'id',
    type: 'checkbox',
    options: [
      { label: '黄瓜', value: 2 },
      { label: '番茄', value: 3 },
    ],
    initialValue: [2, 3],
  },
  {
    label: '上报时间',
    name: 'time',
    type: 'datePicker',
    initialValue: moment(),
  },
  {
    label: '照片',
    name: 'picture',
    type: 'UploadGrid',
    full: true,
    onlyimg: true,
    attributes: {
      fileList: queryInfo?.fileList,
      onChange: ({ fileList }) => setInfo({ ...queryInfo, fileList: fileList }),
      onDownload: (file) => {
        console.log('file', file);
      },
      action: '',
      listType: 'picture-card',
      showDownloadIcon: isView,
      showRemoveIcon: !isView,
      showPreviewIcon: true,
      maxCount: 1,
    },
  },
  {
    label: '验证码',
    name: 'time2',
    type: 'inputCount',
    attributes: {
      onChange: (e) => setInfo({ ...queryInfo, time2: e }),
    },
    initialValue: queryInfo?.time2,
  },
];
