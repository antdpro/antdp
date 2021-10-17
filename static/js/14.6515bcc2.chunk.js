(this["webpackJsonp@example/website"]=this["webpackJsonp@example/website"]||[]).push([[14],{1061:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(262),i=n(4);function a(){return Object(i.jsx)(r.a,{source:"@antdp/config\n---\n\n[![npm](https://img.shields.io/npm/v/@antdp/config.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/config)\n[![npm download](https://img.shields.io/npm/dm/@antdp/config.svg?style=flat)](https://www.npmjs.com/package/@antdp/config)\n\n\u5c06 umi \u914d\u7f6e\u5305\u88f9\u4e00\u5c42\n\n## Installation\n\n```bash\nnpm i @antdp/config --save-dev\n```\n\n## Basic Usage\n\n```js\nimport config from '@antdp/config';\nimport router from './router.json';\nimport proxy from './proxy';\n\nexport default config(router, {\n  proxy,\n});\n```\n\n## Interface\n\n```typescript\nimport { IConfig, IRoute } from 'umi';\n\nexport interface Options extends Omit<IConfig, 'routes'> {\n  routes: IRoute;\n}\n\nexport interface Config {\n  (routes?: IRoute, optiosn?: Options): IConfig;\n}\n\ndeclare var config: Config;\nexport default config;\n```\n\n## Define\n\n- `ANTD_IS_TABS` \u662f\u5426\u663e\u793a Tab \u9009\u9879\u5361\uff0c\u9ed8\u8ba4\u663e\u793a true\n- `ANTD_IS_IFRAME_RENDER` \u662f\u5426\u4f7f\u7528 iframe \u5c55\u793a\u5185\u5bb9\n- `ANTD_IS_BREADCRUMB` \u662f\u5426\u5f00\u542f\u7236\u5b50\u8def\u7531\u9762\u5305\u5c51\n- `ANTD_AUTH_CONF` \u662f\u5426\u5f00\u542f\u6743\u9650\u9a8c\u8bc1 \u9ed8\u8ba4\u503c`false`\u4e0d\u542f\u7528 \u53c2\u6570\uff1a\n  - `auth_menu` \u50a8\u5b58\u83dc\u5355\u8def\u7531\u6743\u9650---\u672c\u5730keys \u9ed8\u8ba4\u503c`authMenu`\n  - `auth_btn` \u50a8\u5b58\u6309\u94ae\u8def\u5f84\u6743\u9650---\u672c\u5730keys \u9ed8\u8ba4\u503c `authBtn`\n  - `auth_check_url` \u5224\u65ad\u8def\u5f84\u662f\u5426\u6709\u6743\u9650\u7684\u5b57\u6bb5 \u9ed8\u8ba4\u503c`menuUrl`,\u5982\u679c\u5b57\u6bb5\u8bbe\u7f6e\u4e3a`undefined`\u5219`auth_menu`\u548c`auth_btn`\u50a8\u5b58\u5f62\u5f0f\u4e3a `[\"/web\"]`,\u53cd\u4e4b\u50a8\u5b58\u5f62\u5f0f\u4e3a`[{menuUrl:\"/web\"}]`,\n- `ANTD_MENU_IS_SHOW` \u662f\u5426\u663e\u793a \u5de6\u4fa7\u83dc\u5355\n- `ANTD_HEAD_IS_SHOW` \u662f\u5426\u663e\u793a head\u5934\u90e8 \n\n## favicon\n\n```js\nexport default {\n  // \u914d\u7f6e favicon \u5730\u5740\uff08href \u5c5e\u6027\uff09\n  favicon: '/assets/favicon.ico', \n}\n```",editePath:"https://github.com/antdpro/antdp/edit/master/packages/config/README.md"})}},260:function(t,e,n){t.exports={rehyp:"markdown_rehyp__1vuN5",footer:"markdown_footer__aGC1T"}},261:function(t,e,n){t.exports={warpper:"index_warpper__9aw_2",inner:"index_inner__2DOiI",icons:"index_icons__1xqyE",nav:"index_nav__3YT0_",badges:"index_badges__SlFzx"}},262:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var r=n(89),i=n(90),a=n(253),s=n(256),o=n(258),c=n(259),l=n(0),p=n.n(l),d=n(271),h=n(272),u=n(273),b=n(4),f=["dependencies","codeSandbox","codePen"];function g(t){var e=t.dependencies,n=t.codeSandbox,a=(t.codePen,Object(i.a)(t,f)),s=Object(r.a)({},a);return n&&(s.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:s.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"antdp",description:"antdp react component - demo",dependencies:{antdp:"latest",react:"latest","react-dom":"latest"},devDependencies:{"@kkt/less-modules":"6.11.0",kkt:"6.11.0",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),Object(b.jsx)(u.a,Object(r.a)(Object(r.a)({},s),{},{dependencies:Object(r.a)(Object(r.a)({},e),{},{React:p.a},p.a),style:{marginBottom:0}}))}var m,j=n(260),x=n.n(j),O=n(261),v=n.n(O),w=["title","titleId"];function _(){return _=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_.apply(this,arguments)}function k(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function y(t,e){var n=t.title,r=t.titleId,i=k(t,w);return l.createElement("svg",_({width:"20px",height:"20px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:e,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,m||(m=l.createElement("path",{d:"M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"})))}var S,I=l.forwardRef(y),A=(n.p,["title","titleId"]);function E(){return E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},E.apply(this,arguments)}function N(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function P(t,e){var n=t.title,r=t.titleId,i=N(t,A);return l.createElement("svg",E({viewBox:"0 0 1024 1024",width:20,height:20,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:e,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,S||(S=l.createElement("path",{d:"M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z",fill:"#C71D23"})))}var R=l.forwardRef(P),D=(n.p,[{title:"Product",childrens:[{href:"https://antdpro.gitee.io/antdp",title:"antdp \u56fd\u5185\u955c\u50cf\u7ad9\u70b9 \ud83c\udde8\ud83c\uddf3"},{href:"https://github.com/antdpro/create-antdp",title:"create-antdp \u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u9879\u76ee"},{href:"https://github.com/uiwjs",title:"@uiwjs \u4e00\u4e9b React \u76f8\u5173\u7ec4\u4ef6"},{href:"https://github.com/jaywcjlove/tsbb",title:"TSBB \u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6\uff1f"}]},{title:"\u76f8\u5173\u8d44\u6e90",childrens:[{href:"https://umijs.org/",title:"UmiJS - React \u5e94\u7528\u5f00\u53d1\u6846\u67b6"},{href:"https://github.com/websemantics/awesome-ant-design",title:"Awesome Ant Design"},{href:"https://github.com/alibaba/hooks",title:"ahooks-React Hooks \u5e93"}]},{title:"\u5176\u5b83\u8d44\u6599",childrens:[{href:"https://github.com/facebook/react",title:"React"},{href:"https://ant.design/",title:"Ant Design"},{href:"https://ant-design.gitee.io/",title:"Ant Design \u56fd\u5185\u955c\u50cf\u7ad9\u70b9 \ud83c\udde8\ud83c\uddf3"}]},{title:"\u5b66\u4e60\u8d44\u6599",childrens:[{href:"https://www.react.express/",title:"React Express"},{href:"https://jskatas.org/",title:"JavaScript Katas"},{href:"https://www.typescriptlang.org/",title:"TypeScript"},{href:"https://es6.ruanyifeng.com/",title:"ES6 \u5165\u95e8\u6559\u7a0b"}]}]);function C(t){var e=t.placement;return Object(b.jsx)("footer",{className:v.a.warpper,children:Object(b.jsxs)("div",{className:v.a.inner,style:Object(r.a)({},"left"===e?{margin:"inherit"}:{}),children:[Object(b.jsx)("div",{className:v.a.nav,children:D.map((function(t,e){return Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:t.title}),Object(b.jsx)("ul",{children:t.childrens.map((function(t,e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:t.href,target:"__blank",children:t.title})},e)}))})]})},e)}))}),Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{className:v.a.icons,children:[Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp",target:"__blank",children:Object(b.jsx)(I,{})}),Object(b.jsx)("a",{href:"https://gitee.com/antdpro/antdp",target:"__blank",children:Object(b.jsx)(R,{})})]}),Object(b.jsxs)("div",{className:v.a.icons,children:[Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(b.jsx)("a",{href:"https://www.npmjs.com/package/antdp",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/npm/v/antdp.svg",alt:"npm"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/releases",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/release/antdpro/antdp.svg",alt:"Github Release"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/issues",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/issues/antdpro/antdp.svg",alt:"Github Issues"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/network",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/forks/antdpro/antdp.svg",alt:"Github Forks"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/stargazers",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/stars/antdpro/antdp.svg",alt:"Github Stars"})})]}),Object(b.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp",target:"__blank",children:"antdp"}),". All rights reserved."]})]})]})})}var T=["inline","node"],B=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.forEach((function(e){"text"===e.type?n+=e.value:e.children&&Array.isArray(e.children)&&(n+=t(e.children))})),n},M=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.editePath;return Object(b.jsxs)(l.Fragment,{children:[Object(b.jsx)(d.a,{style:{padding:"20px 26px 40px 26px"},source:this.props.source,rehypePlugins:[[h.a,{rewrite:function(t){"element"===t.type&&"pre"===t.tagName&&"rehyp"===t.properties["data-type"]&&t.properties.className.push(x.a.rehyp)}}]],components:{code:function(e){var n=e.inline,a=e.node,s=Object(i.a)(e,T),o=s.noPreview,c=s.noScroll,l=s.bgWhite,p=s.noCode,d=s.codePen,h=s.codeSandbox;if(n)return Object(b.jsx)("code",Object(r.a)({},s));var u={noPreview:o,noScroll:c,bgWhite:l,noCode:p,codePen:d,codeSandbox:h};return 0===Object.keys(u).filter((function(t){return void 0!==u[t]})).length?Object(b.jsx)("code",Object(r.a)({},s)):Object(b.jsx)(g,{code:B(a.children),dependencies:t.props.dependencies,noPreview:o,noScroll:c,bgWhite:l,noCode:p,codePen:d,codeSandbox:h})}}}),e&&Object(b.jsx)("div",{className:x.a.footer,children:Object(b.jsx)("a",{href:e,children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762\u5185\u5bb9"})}),Object(b.jsx)(C,{placement:"left"})]})}}]),n}(l.Component)},269:function(t,e){},270:function(t,e){}}]);
//# sourceMappingURL=14.6515bcc2.chunk.js.map