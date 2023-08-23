import { Footer } from 'dumi-theme-antd-style';

const footer = [
  {
    title: 'Product',
    items: [
      {
        url: 'https://antdpro.gitee.io/antdp',
        title: 'antdp 国内镜像站点 🇨🇳',
        openExternal: true,
      },
      {
        url: 'https://github.com/antdpro/create-antdp',
        title: 'create-antdp 快速创建一个项目',
        openExternal: true,
      },
      {
        url: 'https://github.com/uiwjs',
        title: '@uiwjs 一些 React 相关组件',
        openExternal: true,
      },
      {
        url: 'https://github.com/jaywcjlove/tsbb',
        title: 'TSBB 创建一个组件？',
        openExternal: true,
      },
    ],
  },
  {
    title: '相关资源',
    items: [
      {
        url: 'https://umijs.org/',
        title: 'UmiJS - React 应用开发框架',
        openExternal: true,
      },
      {
        url: 'https://github.com/websemantics/awesome-ant-design',
        title: 'Awesome Ant Design',
        openExternal: true,
      },
      {
        url: 'https://github.com/alibaba/hooks',
        title: 'ahooks-React Hooks 库',
        openExternal: true,
      },
      {
        url: 'https://kktjs.github.io/kkt-pro/#/doc/kktp',
        title: 'KKTP',
        openExternal: true,
      },
    ],
  },
  {
    title: '其它资料',
    items: [
      {
        url: 'https://github.com/facebook/react',
        title: 'React',
        openExternal: true,
      },
      {
        url: 'https://ant.design/',
        title: 'Ant Design',
        openExternal: true,
      },
      {
        url: 'https://ant-design.gitee.io/',
        title: 'Ant Design 国内镜像站点 🇨🇳',
        openExternal: true,
      },
    ],
  },
  {
    title: '学习资料',
    items: [
      {
        url: 'https://www.react.express/',
        title: 'React Express',
        openExternal: true,
      },
      {
        url: 'https://jskatas.org/',
        title: 'JavaScript Katas',
        openExternal: true,
      },
      {
        url: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        openExternal: true,
      },
      {
        url: 'https://es6.ruanyifeng.com/',
        title: 'ES6 入门教程',
        openExternal: true,
      },
    ],
  },
];

export default () => {
  return (
    <Footer
      bottom={'Copyright © 2023 antdp. All rights reserved.'}
      columns={footer}
    />
  );
};
