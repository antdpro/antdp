export const detailItems = ({ isView = false, queryInfo, setInfo }) => [
  {
    label: '邮箱',
    name: 'remark',
    type: 'input',
    initialValue: 'antdesign@alipay.com',
  },
  {
    label: '昵称',
    name: 'name',
    type: 'input',
    initialValue: 'Serati Ma',
  },
  {
    label: '个人简介',
    name: 'person',
    type: 'textarea',
  },
  {
    label: '国家/地区',
    name: 'country',
    type: 'select',
    attributes: {
      treeData: [{ label: '中国', value: 1 }],
      allowClear: true,
      dropdownStyle: { maxHeight: 400, overflow: 'auto' },
    },
  },
  {
    label: '所在省区',
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
    label: '街道地址',
    name: 'dz',
    type: 'input',
    initialValue: '西湖区工专路 77 号',
  },
  {
    label: '联系电话',
    name: 'phone',
    type: 'input',
  },
];

export const messageItems = [
  {
    title: '账户密码',
    context: '其他用户的消息将以站内信的形式通知',
  },
  {
    title: '系统消息',
    context: '系统消息将以站内信的形式通知',
  },
  {
    title: '待办任务',
    context: '待办任务将以站内信的形式通知',
  },
];

export const accountItems = [
  {
    title: '绑定淘宝',
    context: '当前未绑定淘宝账号',
  },
  {
    title: '绑定支付宝',
    context: '当前未绑定支付宝账号',
  },
  {
    title: '绑定钉钉',
    context: '当前未绑定钉钉账号',
  },
];

export const securityItems = [
  {
    title: '账户密码',
    context: '当前密码强度：强',
  },
  {
    title: '密保手机',
    context: '已绑定手机：138****8293',
  },
  {
    title: '密保问题',
    context: '未设置密保问题，密保问题可有效保护账户安全',
  },
  {
    title: '备用邮箱',
    context: '已绑定邮箱：ant***sign.com',
  },
  {
    title: 'MFA 设备',
    context: '未绑定 MFA 设备，绑定后，可以进行二次确认',
  },
];
