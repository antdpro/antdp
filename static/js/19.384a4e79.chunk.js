(this["webpackJsonp@example/website"]=this["webpackJsonp@example/website"]||[]).push([[19],{1063:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(262),s=n(4);function a(){return Object(s.jsx)(r.a,{source:"@antdp/user-login\n---\n\n[![npm](https://img.shields.io/npm/v/@antdp/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/user-login)\n[![npm download](https://img.shields.io/npm/dm/@antdp/user-login.svg?style=flat)](https://www.npmjs.com/package/@antdp/user-login)\n\n\u767b\u5f55\u754c\u9762\n\n## Installation\n\n```bash\nnpm i @antdp/user-login --save\n```\n\n## Basic Usage\n\n```jsx\nimport React, { useRef } from 'react';\nimport UserLogin from '@antdp/user-login';\nimport logo from './logo.svg';\n\nexport default (props) => {\n  const baseRef = useRef();\n  const TYPE = 'both';\n  return (\n    <UserLogin\n      logo={logo}\n      projectName=\"Ant Design\"\n      loading={props.loading}\n      onFinish={(values) => {\n        let params;\n        if (TYPE === 'both') {\n          params =\n            baseRef?.current?.state?.key === '1'\n              ? { username: values?.username, password: values?.password }\n              : { phone: values?.phone, code: values?.code };\n        } else {\n          params = values;\n        }\n        props.dispatch({\n          type: 'global/login',\n          payload: params,\n        });\n      }}\n      type={TYPE}\n      onSend={() => console.log('\u77ed\u4fe1\u9a8c\u8bc1\u56de\u8c03')}\n      formBtns={[\n        {\n          label: '\u767b\u5f55',\n          attr: {\n            type: 'primary',\n            htmlType: 'submit',\n            style: {\n              marginRight: 20,\n            },\n          },\n        },\n        {\n          label: '\u91cd\u7f6e',\n          attr: {\n            type: 'primary',\n          },\n        },\n      ]}\n    />\n  )\n};\n```\n\n## Props\n\n```typescript\nimport React from 'react';\nimport { FormProps, FormItemProps } from 'antd/lib/form';\nimport { InputProps } from 'antd/lib/input';\n\n\nexport interface formItem extends FormItemProps {\n  inputProps?: InputProps;\n}\n\nexport interface UserLoginProps extends FormProps{\n  /**\n   * \u9879\u76eelogo\n   */\n  logo?: JSX.Element;\n  /**\n   * \u9879\u76ee\u540d\u79f0\n   */\n  projectName?: string;\n  className?: string;\n  loading?: boolean;\n  formItems?: formItem[];\n  // \u77ed\u4fe1\u767b\u9646 \u8868\u5355\n  phoneFormItems?:formItem[];\n  // \u77ed\u4fe1\u9a8c\u8bc1form.item\u5c5e\u6027\n  phoneCodeProps?:formItemProps\n  // \u9a8c\u8bc1\u77ed\u4fe1\u56de\u8c03\n  onSend ?: () => void\n  // \u624b\u673a\u767b\u9646\uff5c\u8d26\u53f7\u767b\u9646\uff5c\u8d26\u53f7\u624b\u673a\u767b\u9646\n  type?:'phone' | 'account' | 'both',\n  // \u767b\u9646\u7ec4\u4ef6\u989d\u5916jsx.element\n  children?:JSX.Element;\n  // \u8868\u5355\u5185\u90e8\u989d\u5916jsx.element\n  formChildren?:JSX.Element;\n}\n```",editePath:"https://github.com/antdpro/antdp/edit/master/packages/user-login/README.md"})}},260:function(e,t,n){e.exports={rehyp:"markdown_rehyp__1vuN5",footer:"markdown_footer__aGC1T"}},261:function(e,t,n){e.exports={warpper:"index_warpper__9aw_2",inner:"index_inner__2DOiI",icons:"index_icons__1xqyE",nav:"index_nav__3YT0_",badges:"index_badges__SlFzx"}},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=n(89),s=n(90),a=n(253),o=n(256),i=n(258),c=n(259),l=n(0),p=n.n(l),d=n(271),h=n(272),m=n(273),b=n(4),u=["dependencies","codeSandbox","codePen"];function g(e){var t=e.dependencies,n=e.codeSandbox,a=(e.codePen,Object(s.a)(e,u)),o=Object(r.a)({},a);return n&&(o.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:o.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"antdp",description:"antdp react component - demo",dependencies:{antdp:"latest",react:"latest","react-dom":"latest"},devDependencies:{"@kkt/less-modules":"6.11.0",kkt:"6.11.0",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),Object(b.jsx)(m.a,Object(r.a)(Object(r.a)({},o),{},{dependencies:Object(r.a)(Object(r.a)({},t),{},{React:p.a},p.a),style:{marginBottom:0}}))}var f,j=n(260),x=n.n(j),v=n(261),O=n.n(v),w=["title","titleId"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function _(e,t){var n=e.title,r=e.titleId,s=k(e,w);return l.createElement("svg",y({width:"20px",height:"20px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},s),n?l.createElement("title",{id:r},n):null,f||(f=l.createElement("path",{d:"M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"})))}var P,S=l.forwardRef(_),I=(n.p,["title","titleId"]);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function N(e,t){var n=e.title,r=e.titleId,s=R(e,I);return l.createElement("svg",E({viewBox:"0 0 1024 1024",width:20,height:20,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},s),n?l.createElement("title",{id:r},n):null,P||(P=l.createElement("path",{d:"M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z",fill:"#C71D23"})))}var A=l.forwardRef(N),C=(n.p,[{title:"Product",childrens:[{href:"https://antdpro.gitee.io/antdp",title:"antdp \u56fd\u5185\u955c\u50cf\u7ad9\u70b9 \ud83c\udde8\ud83c\uddf3"},{href:"https://github.com/antdpro/create-antdp",title:"create-antdp \u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u9879\u76ee"},{href:"https://github.com/uiwjs",title:"@uiwjs \u4e00\u4e9b React \u76f8\u5173\u7ec4\u4ef6"},{href:"https://github.com/jaywcjlove/tsbb",title:"TSBB \u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6\uff1f"}]},{title:"\u76f8\u5173\u8d44\u6e90",childrens:[{href:"https://umijs.org/",title:"UmiJS - React \u5e94\u7528\u5f00\u53d1\u6846\u67b6"},{href:"https://github.com/websemantics/awesome-ant-design",title:"Awesome Ant Design"},{href:"https://github.com/alibaba/hooks",title:"ahooks-React Hooks \u5e93"}]},{title:"\u5176\u5b83\u8d44\u6599",childrens:[{href:"https://github.com/facebook/react",title:"React"},{href:"https://ant.design/",title:"Ant Design"},{href:"https://ant-design.gitee.io/",title:"Ant Design \u56fd\u5185\u955c\u50cf\u7ad9\u70b9 \ud83c\udde8\ud83c\uddf3"}]},{title:"\u5b66\u4e60\u8d44\u6599",childrens:[{href:"https://www.react.express/",title:"React Express"},{href:"https://jskatas.org/",title:"JavaScript Katas"},{href:"https://www.typescriptlang.org/",title:"TypeScript"},{href:"https://es6.ruanyifeng.com/",title:"ES6 \u5165\u95e8\u6559\u7a0b"}]}]);function T(e){var t=e.placement;return Object(b.jsx)("footer",{className:O.a.warpper,children:Object(b.jsxs)("div",{className:O.a.inner,style:Object(r.a)({},"left"===t?{margin:"inherit"}:{}),children:[Object(b.jsx)("div",{className:O.a.nav,children:C.map((function(e,t){return Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:e.title}),Object(b.jsx)("ul",{children:e.childrens.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.href,target:"__blank",children:e.title})},t)}))})]})},t)}))}),Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{className:O.a.icons,children:[Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp",target:"__blank",children:Object(b.jsx)(S,{})}),Object(b.jsx)("a",{href:"https://gitee.com/antdpro/antdp",target:"__blank",children:Object(b.jsx)(A,{})})]}),Object(b.jsxs)("div",{className:O.a.icons,children:[Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(b.jsx)("a",{href:"https://www.npmjs.com/package/antdp",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/npm/v/antdp.svg",alt:"npm"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/releases",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/release/antdpro/antdp.svg",alt:"Github Release"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/issues",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/issues/antdpro/antdp.svg",alt:"Github Issues"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/network",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/forks/antdpro/antdp.svg",alt:"Github Forks"})}),Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp/stargazers",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/stars/antdpro/antdp.svg",alt:"Github Stars"})})]}),Object(b.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(b.jsx)("a",{href:"https://github.com/antdpro/antdp",target:"__blank",children:"antdp"}),". All rights reserved."]})]})]})})}var F=["inline","node"],B=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.forEach((function(t){"text"===t.type?n+=t.value:t.children&&Array.isArray(t.children)&&(n+=e(t.children))})),n},D=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.editePath;return Object(b.jsxs)(l.Fragment,{children:[Object(b.jsx)(d.a,{style:{padding:"20px 26px 40px 26px"},source:this.props.source,rehypePlugins:[[h.a,{rewrite:function(e){"element"===e.type&&"pre"===e.tagName&&"rehyp"===e.properties["data-type"]&&e.properties.className.push(x.a.rehyp)}}]],components:{code:function(t){var n=t.inline,a=t.node,o=Object(s.a)(t,F),i=o.noPreview,c=o.noScroll,l=o.bgWhite,p=o.noCode,d=o.codePen,h=o.codeSandbox;if(n)return Object(b.jsx)("code",Object(r.a)({},o));var m={noPreview:i,noScroll:c,bgWhite:l,noCode:p,codePen:d,codeSandbox:h};return 0===Object.keys(m).filter((function(e){return void 0!==m[e]})).length?Object(b.jsx)("code",Object(r.a)({},o)):Object(b.jsx)(g,{code:B(a.children),dependencies:e.props.dependencies,noPreview:i,noScroll:c,bgWhite:l,noCode:p,codePen:d,codeSandbox:h})}}}),t&&Object(b.jsx)("div",{className:x.a.footer,children:Object(b.jsx)("a",{href:t,children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762\u5185\u5bb9"})}),Object(b.jsx)(T,{placement:"left"})]})}}]),n}(l.Component)},269:function(e,t){},270:function(e,t){}}]);
//# sourceMappingURL=19.384a4e79.chunk.js.map