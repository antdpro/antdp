import { defineConfig } from 'dumi';
import { featuresZh } from './config/features';
const isProd = process.env.NODE_ENV === 'production';
export default defineConfig({
  outputPath: 'docs-dist',
  // Because of using GitHub Pages
  base: isProd ? '/antdp/' : '/',
  publicPath: isProd ? '/antdp/' : '/',
  themeConfig: {
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
    name: 'antd project',
    logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
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
