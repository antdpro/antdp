import { defineConfig } from 'dumi';
import { featuresZh } from './config/features';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'antd project',
    logo: '/logo.svg',
    hero: {
      description:
        '一个基于 antd5.x 和 umi 的初始级别项目，集成路由、dva(Redux)、选项卡等特性',
      actions: [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guid/quick-start',
        },
        {
          text: 'Github',
          link: 'https://github.com/antdpro/antdp',
          openExternal: true,
        },
      ],
      features: featuresZh,
    },
    socialLinks: {
      github: 'https://github.com/antdpro/antdp',
    },
    editLink: true,
    extraBabelPlugins: ['antd-style'],
    nav: [
      {
        title: '实例预览',
        link: 'https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0',
      },
      { title: '教程', link: '/guide/quick-start' },
      { title: '组件', link: '/component/user-login' },
    ],
  },
});
