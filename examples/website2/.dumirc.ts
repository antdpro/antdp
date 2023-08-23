import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: 'antdp',
    logo:'/logo.svg',
    editLink:true,
    socialLinks: {
      github: 'https://github.com/antdpro/antdp',
    },
    footer: 'Copyright © 2023 antdp. All rights reserved.' ,
    nav:[{title:'实例预览',link:'https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-base?embed=1&hideNavigation=0&hidedevtools=0'},{title:'教程',link:'/guide/quick-start'},{title:'组件',link:'/component/user-login'}]
  },
});
