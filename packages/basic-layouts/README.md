@antdp/basic-layouts
---

[![npm](https://img.shields.io/npm/v/@antdp/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/basic-layouts)
[![npm download](https://img.shields.io/npm/dm/@antdp/basic-layouts.svg?style=flat)](https://www.npmjs.com/package/@antdp/basic-layouts)

入口公共界面

## 安装

```bash
$ npm i @antdp/basic-layouts  # yarn add  @antdp/basic-layouts
```


## 基本使用

```jsx
import React from 'react';
import BasicLayouts from '@antdp/basic-layouts';
const Demo = () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
    />
  )
};

export default Demo
```

## 导航菜单模式

```jsx
import React from 'react';
import BasicLayouts from '@antdp/basic-layouts';
const Demo = () => {
  return (
    <BasicLayouts
      // topleft | mix
      layout="slider"
    />
  )
};

export default Demo
```
slider
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/244599964-eb494b03-7de0-43ea-a896-cb42c3b32d5e.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0)

mix
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/245037617-542a3c87-9ce8-4ea9-ab79-fd588f6723d4.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base2?embed=1&hideNavigation=0&hidedevtools=0)

topleft
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/245037507-28d13b4b-cc18-4f7d-a0e2-2cbd4c8ef2eb.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base3?embed=1&hideNavigation=0&hidedevtools=0)


## 菜单国际化设置

```jsx
import BasicLayouts from '@antdp/basic-layouts';
import { useIntl,SelectLang } from '@umijs/max';

const Demo = () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
      intlLanguage={useIntl()}
      topRightLanguage={<SelectLang />}
    />
  )
};
export default Demo
```
## 配置头部右侧菜单
```jsx
import BasicLayouts from '@antdp/basic-layouts';

export default () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
      topRightMenu={[
          {
            title: '个人中心',
            icon: <UserOutlined />,
            onClick: () => {},
          },
          {
            title: '个人设置',
            link: '/setting/property',
            icon: <SettingOutlined />,
          },
          {
            divider: true,
          },
          {
            title: '退出登录',
            icon: <LogoutOutlined />,
            onClick: () => {
              logout();
            },
          },
        ]}
    />
  )
};

```

## 配置明亮主题
```jsx
import BasicLayouts from '@antdp/basic-layouts';

export default () => {
  return (
    <BasicLayouts
      theme="dark"
      projectName="Ant Design Pro"
    />
  )
};
```
默认样式
```css
 /* 亮模式默认配色 */
.antdp-basic-layouts-light{
  /* Layout.Slider背景色 */
  --primary-slider-bg: #fff;
  /* Header背景色 */
  --primary-header-bg: #fff;
  /* 阴影色 */
  --primary-shadow: #9393930d;
  /* Layout.Slider底部分割线颜色 */
  --primary-slider-trigger-border:rgba(0,0,0,.06);
  /* Layout.Slider底部按钮颜色 */
  --primary-sider-trigger-text-color:#1d1d1d;
  /* Header文字颜色 */
  --primary-header-text-color:#1d1d1d;
  /* 项目title颜色 */
  --primary-title-text-color:#1d1d1d;
  /* 页面背景色 */
  --primary-content-bg: #f5f5f5;
}
 /* 暗模式默认配色 */
.antdp-basic-layouts-dark{
  --primary-slider-bg: #1d1d1d;
  --primary-header-bg: #1d1d1d;
  --primary-shadow: #001529;
  --primary-slider-trigger-border:#fff;
  --primary-sider-trigger-text-color:#fff;
  --primary-header-text-color:#fff;
  --primary-title-text-color:#fff;
  --primary-content-bg: #1d1d1d;
}
```

## className改变BasicLayouts颜色

第一步配置样式
```css
  .antdp-basic-layouts-light{
    --primary-slider-bg: #1d1d1d !important;
    --primary-header-bg: #fff !important;
    --primary-shadow: #9393930d !important;
    --primary-slider-trigger-border:#fff !important;
    --primary-header-text-color:#1d1d1d !important;
    --primary-title-text-color:#1677ff !important;
    --primary-sider-trigger-text-color:#fff !important;
    --primary-content-bg: #f5f5f5 !important;
  }
```

第二步引用样式
```jsx
import BasicLayouts from '@antdp/basic-layouts';
import './index.css';

export default () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
      theme="light"
      layout="slider"
      className="antdp-basic-layouts-light"
      menuProps={{
        theme: 'dark',
      }}
    />
  )
};
```
如下图：
![](https://user-images.githubusercontent.com/59959718/245036444-3907b947-e311-48df-841c-a4e4b666f2b3.jpg)

## Message
由于antd 5.x需全局包裹App，引用message组件。我们在basic-layouts下也进行了注册。

使用方法一
```jsx
import { App } from 'antd';
import React from 'react';

const MyPage = () => {
  const { message, notification, modal } = App.useApp();
  message.success('Good!');
  notification.info({ message: 'Good' });
  modal.warning({ title: 'Good' });
  // ....
  // other message, notification, modal static function
  return <div>Hello word</div>;
};
export default MyPage;
```

使用方法二
```jsx
import { Button, Space } from 'antd';
import React from 'react';
import { message } from '@antdp/basic-layouts';

export default () => {
  const showMessage = () => {
    message.success('Success!');
  };

  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
    </Space>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| logo | 项目logo | string  | - |
| projectName | 项目名称 | `React.ReactNode` | - |
| children | 自定义内容 | `React.ReactNode` | - |
| intlLanguage | 国际化语言转换方法 | `IntlShape` |
| topRightMenu | 头像下拉菜单 |  `TopRightMenuProps[]` | - |
| bodyPadding | 设置内容区域补白，默认 14px |   `number` | - |
| topRightLanguage | 顶部右方 |   `React.ReactNode` | - |
| siderWidth | 置最左边菜单宽度 |   `number` | `180` |
| profile | 用户信息显示 |   `{avatar?: string;name?: string}` | - |
| theme | 明暗主题 |   `dark \| light`  | `light` |
| className | 样式 |   `string` | - |
| layout | 导航菜单模式,slider：右侧导航，topleft：顶部左侧导航，mix：混合导航 |   `LayoutModel` | `mix` |

## TopRightMenuProps
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| icon | 图标 | `React.ReactNode`  | - |
| title | 标题 | `React.ReactNode` | - |
| link | 链接 | `string` | - |
| divider | 是否有下划线 | `boolean` | - |
| onClick | 点击事件 | `IntlShape` |
