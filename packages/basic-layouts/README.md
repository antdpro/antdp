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

### slider
```jsx
import React from 'react';
import BasicLayouts from '@antdp/basic-layouts';
const Demo = () => {
  return (
    <BasicLayouts
      layout="slider"
    />
  )
};
```
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/262203847-d1612c3c-a37e-47fa-8282-dba85a8366be.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0)

### mix
```jsx
import React from 'react';
import BasicLayouts from '@antdp/basic-layouts';
const Demo = () => {
  return (
    <BasicLayouts
      layout="mix"
    />
  )
};
```
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/262203911-58268a5b-a948-4909-87cc-bd6b4a6b8d1f.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0)

### topleft
```jsx
import React from 'react';
import BasicLayouts from '@antdp/basic-layouts';
const Demo = () => {
  return (
    <BasicLayouts
      layout="topleft"
    />
  )
};
```
[![Ant Design Project](https://user-images.githubusercontent.com/59959718/262203891-ba31a1c0-84ad-42ae-8e0f-447b81ab9439.png)](https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0)


## 配置明亮主题

### 亮主题light
```jsx
import BasicLayouts from '@antdp/basic-layouts';

export default () => {
  return (
    <BasicLayouts
      theme="light"
      projectName="Ant Design Pro"
    />
  )
};
```

### 暗主题dark
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


### 默认样式
```js
 const defaultThemeColors = (layout) =>{
  if(layout === 'slider'){
    return {
      light: {
        '--primary-slider-bg': 'rgb(36, 37, 37)',
        '--primary-header-bg': '#fff',
        '--primary-shadow': 'rgba(29,35,41,.05)',
        '--primary-slider-trigger-border': '#fff',
        '--primary-sider-trigger-text-color': '#fff',
        '--primary-header-text-color': 'rgb(36, 37, 37)',
        '--primary-title-text-color': '#fff',
        '--primary-content-bg': '#f5f5f5',
        'itemSelectedBg': 'rgb(24, 144, 255)',
        'colorItemBgSelected': '#fff',
        'itemActiveBg': '#fff',
        'horizontalItemSelectedBg': '#fff',
        'itemColor': 'rgba(229, 224, 216, 0.85)',
        'itemHoverColor': 'rgba(229, 224, 216, 0.85)',
        'itemSelectedColor': '#fff',
        'colorBgElevated': 'rgba(229, 224, 216, 0.85)',
      },
      dark: {
        '--primary-slider-bg': 'rgb(36, 37, 37)',
        '--primary-header-bg': 'rgb(36, 37, 37)',
        '--primary-shadow': 'rgba(13, 13, 13, 0.65)',
        '--primary-slider-trigger-border': '#fff',
        '--primary-sider-trigger-text-color': '#fff',
        '--primary-header-text-color': '#fff',
        '--primary-title-text-color': '#fff',
        '--primary-content-bg': '#1d1d1d',
        'itemSelectedBg': 'rgb(24, 144, 255)',
        'colorItemBgSelected': '#fff',
        'itemActiveBg': '#fff',
        'horizontalItemSelectedBg': '#fff',
        'itemColor': 'rgba(229, 224, 216, 0.85)',
        'itemHoverColor': 'rgba(229, 224, 216, 0.85)',
        'itemSelectedColor': '#fff',
        'colorBgElevated': 'rgba(229, 224, 216, 0.85)',
      },
    }
  }
  if(layout === 'topleft'){
    return {
      light: {
        '--primary-slider-bg': '#fff',
        '--primary-header-bg': '#fff',
        '--primary-shadow': 'rgba(0,21,41,.12)',
        '--primary-slider-trigger-border': 'rgba(0,0,0,.06)',
        '--primary-sider-trigger-text-color': '#1d1d1d',
        '--primary-header-text-color': '#1d1d1d',
        '--primary-title-text-color': '#1d1d1d',
        '--primary-content-bg': '#f5f5f5',
        'itemSelectedBg': '#e6f7ff',
        'colorItemBgSelected': 'rgba(0, 0, 0, 0.06)',
        'itemActiveBg': '#e6f7ff',
        'horizontalItemSelectedBg': 'rgba(0, 0, 0, 0.06)',
        'itemColor': 'rgba(0, 0, 0, 0.65)',
        'itemHoverColor': 'rgba(0, 0, 0, 0.85)',
        'itemSelectedColor': 'rgb(24, 144, 255)',
        'colorBgElevated': '#fff',
      },
      dark: {
        '--primary-slider-bg': 'rgb(36, 37, 37)',
        '--primary-header-bg': 'rgb(36, 37, 37)',
        '--primary-shadow': 'rgba(13, 13, 13, 0.65)',
        '--primary-slider-trigger-border': '#fff',
        '--primary-sider-trigger-text-color': '#fff',
        '--primary-header-text-color': '#fff',
        '--primary-title-text-color': '#fff',
        '--primary-content-bg': '#1d1d1d',
        'itemSelectedBg': 'rgb(24, 144, 255)',
        'colorItemBgSelected': 'rgb(36, 37, 37)',
        'itemActiveBg': '#fff',
        'horizontalItemSelectedBg': 'rgb(36, 37, 37)',
        'itemColor': 'rgba(229, 224, 216, 0.85)',
        'itemHoverColor': 'rgba(229, 224, 216, 0.85)',
        'itemSelectedColor': '#fff',
        'colorBgElevated': 'rgba(229, 224, 216, 0.85)',
      },
    }
  }
  if(layout === 'mix'){
    return {
      light: {
        '--primary-slider-bg': '#fff',
        '--primary-header-bg': 'rgb(36, 37, 37)',
        '--primary-shadow': 'rgba(0,21,41,.08)',
        '--primary-slider-trigger-border': 'rgba(0,0,0,.06)',
        '--primary-sider-trigger-text-color': 'rgb(36, 37, 37)',
        '--primary-header-text-color': '#fff',
        '--primary-title-text-color': '#fff',
        '--primary-content-bg': '#f5f5f5',
        'itemSelectedBg': '#e6f7ff',
        'colorItemBgSelected': 'rgba(0, 0, 0, 0.06)',
        'itemActiveBg': '#e6f7ff',
        'horizontalItemSelectedBg': 'rgba(0, 0, 0, 0.06)',
        'itemColor': 'rgba(0, 0, 0, 0.65)',
        'itemHoverColor': 'rgba(0, 0, 0, 0.85)',
        'itemSelectedColor': 'rgb(24, 144, 255)',
        'colorBgElevated': '#fff',
      },
      dark: {
        '--primary-slider-bg': 'rgb(36, 37, 37)',
        '--primary-header-bg': 'rgb(15, 28, 41)',
        '--primary-shadow': 'rgba(13, 13, 13, 0.65)',
        '--primary-slider-trigger-border': '#fff',
        '--primary-sider-trigger-text-color': '#fff',
        '--primary-header-text-color': '#fff',
        '--primary-title-text-color': '#fff',
        '--primary-content-bg': '#1d1d1d',
        'itemSelectedBg': 'rgb(24, 144, 255)',
        'colorItemBgSelected': '#fff',
        'itemActiveBg': '#fff',
        'horizontalItemSelectedBg': '#fff',
        'itemColor': 'rgba(229, 224, 216, 0.85)',
        'itemHoverColor': 'rgba(229, 224, 216, 0.85)',
        'itemSelectedColor': '#fff',
        'colorBgElevated': 'rgba(229, 224, 216, 0.85)',
      },
    }
  }
}
```

### token自定义BasicLayouts颜色
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
![](https://user-images.githubusercontent.com/59959718/245099199-77d4288b-08e9-49cf-bab8-532d2d2d9f2c.png)

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


## TokenProps
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