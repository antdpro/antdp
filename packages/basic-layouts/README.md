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
import BasicLayout from '@antdp/basic-layouts';
const Demo = () => {
  return (
    <BasicLayout
      // topleft | mix
      layout="slider"
    />
  )
};

export default Demo
```
slider，如下图
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/244599964-eb494b03-7de0-43ea-a896-cb42c3b32d5e.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0)

mix，如下图
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/245037617-542a3c87-9ce8-4ea9-ab79-fd588f6723d4.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0)

topleft，如下图
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/245037507-28d13b4b-cc18-4f7d-a0e2-2cbd4c8ef2eb.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0)


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
.antdp-basic-layouts{
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
.antdp-basic-layouts{
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

## token自定义BasicLayouts颜色
```jsx
import BasicLayouts from '@antdp/basic-layouts';
import './index.css';

export default () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
      theme="light"
      layout="slider"
      token={{
        menu: {
          // menu 的背景颜色
          colorMenuBackground: '#004FD9',
          // menuItem 的 hover 背景颜色
          colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
          // menuItem 的选中背景颜色
          colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
          // menuItem 的字体颜色
          colorTextMenu: 'rgba(255,255,255,0.75)',
          // menuItem hover 的选中字体颜色
          colorTextMenuActive: 'rgba(255,255,255,0.95)',
          // menuItem 的选中字体颜色
          colorTextMenuSelected: '#fff',
          // colorBgMenuItemCollapsedElevated
          colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
          // 菜单底部操作栏boderTopColor
          triggerColor: '#fff',
          // 菜单底部操作栏字体颜色
          triggerTextColor: '#fff',
        },
        header: {
          // 头部背景色
          colorHeaderBackground: '#fff',
          // 头部文字颜色
          headerTextColor: '#000',
        },
        // 项目名称颜色
        titleColor: '#fff',
      }}
    />
  )
};
```
如下图：
![](https://user-images.githubusercontent.com/59959718/245099199-77d4288b-08e9-49cf-bab8-532d2d2d9f2c.png)

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
| token | 导航和头部样式集合 |   `TokenProps` | - |

## TopRightMenuProps
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| icon | 图标 | `React.ReactNode`  | - |
| title | 标题 | `React.ReactNode` | - |
| link | 链接 | `string` | - |
| divider | 是否有下划线 | `boolean` | - |
| onClick | 点击事件 | `IntlShape` |


```ts
export interface TokenProps {
  menu?: {
    colorMenuBackground?: string;
    colorBgMenuItemHover?: string;
    colorBgMenuItemSelected?: string;
    colorTextMenu?: string;
    colorTextMenuActive?: string;
    colorTextMenuSelected?: string;
    colorBgMenuItemCollapsedElevated?: string;
    triggerColor?: string;
    triggerTextColor?: string;
  };
  header?: {
    colorHeaderBackground?: string;
    headerTextColor?: string;
  };
  titleColor?: string;
  shadowColor?: string;
  contentBackground?: string;
}
```