export const detailItems = ({ isView = false, queryInfo, setInfo }) => [
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
