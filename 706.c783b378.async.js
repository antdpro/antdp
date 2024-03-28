"use strict";(self.webpackChunk_example_website=self.webpackChunk_example_website||[]).push([[706],{19706:function(he,E,a){a.r(E),a.d(E,{default:function(){return de}});var l=a(2784),x=a(7896),$={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"},D=$,S=a(76854),z=a(56666),p=a(59740),U=a(72779),W=a.n(U),I=a(18467),G=(0,l.createContext)({}),Z=G,u=a(33028),R=a(86522),H=a(13167),J=a(51444),K=a(72895);function Q(e){return e.replace(/-(.)/g,function(n,r){return r.toUpperCase()})}function V(e,n){(0,K.ZP)(e,"[@ant-design/icons] ".concat(n))}function N(e){return(0,R.Z)(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&((0,R.Z)(e.icon)==="object"||typeof e.icon=="function")}function O(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(n,r){var o=e[r];switch(r){case"class":n.className=o,delete n.class;break;default:delete n[r],n[Q(r)]=o}return n},{})}function h(e,n,r){return r?l.createElement(e.tag,(0,u.Z)((0,u.Z)({key:n},O(e.attrs)),r),(e.children||[]).map(function(o,i){return h(o,"".concat(n,"-").concat(e.tag,"-").concat(i))})):l.createElement(e.tag,(0,u.Z)({key:n},O(e.attrs)),(e.children||[]).map(function(o,i){return h(o,"".concat(n,"-").concat(e.tag,"-").concat(i))}))}function k(e){return(0,I.R_)(e)[0]}function j(e){return e?Array.isArray(e)?e:[e]:[]}var Fe={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},X=`
.anticon {
  display: inline-flex;
  alignItems: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Y=function(n){var r=(0,l.useContext)(Z),o=r.csp,i=r.prefixCls,s=X;i&&(s=s.replace(/anticon/g,i)),(0,l.useEffect)(function(){var f=n.current,d=(0,J.A)(f);(0,H.hq)(s,"@ant-design-icons",{prepend:!0,csp:o,attachTo:d})},[])},q=["icon","className","onClick","style","primaryColor","secondaryColor"],C={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function _(e){var n=e.primaryColor,r=e.secondaryColor;C.primaryColor=n,C.secondaryColor=r||k(n),C.calculated=!!r}function ee(){return(0,u.Z)({},C)}var v=function(n){var r=n.icon,o=n.className,i=n.onClick,s=n.style,f=n.primaryColor,d=n.secondaryColor,T=(0,p.Z)(n,q),g=l.useRef(),m=C;if(f&&(m={primaryColor:f,secondaryColor:d||k(f)}),Y(g),V(N(r),"icon should be icon definiton, but got ".concat(r)),!N(r))return null;var c=r;return c&&typeof c.icon=="function"&&(c=(0,u.Z)((0,u.Z)({},c),{},{icon:c.icon(m.primaryColor,m.secondaryColor)})),h(c.icon,"svg-".concat(c.name),(0,u.Z)((0,u.Z)({className:o,onClick:i,style:s,"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},T),{},{ref:g}))};v.displayName="IconReact",v.getTwoToneColors=ee,v.setTwoToneColors=_;var F=v;function A(e){var n=j(e),r=(0,S.Z)(n,2),o=r[0],i=r[1];return F.setTwoToneColors({primaryColor:o,secondaryColor:i})}function ne(){var e=F.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var re=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];A(I.iN.primary);var y=l.forwardRef(function(e,n){var r=e.className,o=e.icon,i=e.spin,s=e.rotate,f=e.tabIndex,d=e.onClick,T=e.twoToneColor,g=(0,p.Z)(e,re),m=l.useContext(Z),c=m.prefixCls,L=c===void 0?"anticon":c,me=m.rootClassName,Ce=W()(me,L,(0,z.Z)((0,z.Z)({},"".concat(L,"-").concat(o.name),!!o.name),"".concat(L,"-spin"),!!i||o.name==="loading"),r),b=f;b===void 0&&d&&(b=-1);var ve=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,ye=j(T),M=(0,S.Z)(ye,2),ge=M[0],xe=M[1];return l.createElement("span",(0,x.Z)({role:"img","aria-label":o.name},g,{ref:n,tabIndex:b,onClick:d,className:Ce}),l.createElement(F,{icon:o,primaryColor:ge,secondaryColor:xe,style:ve}))});y.displayName="AntdIcon",y.getTwoToneColor=ne,y.setTwoToneColor=A;var B=y,oe=function(n,r){return l.createElement(B,(0,x.Z)({},n,{ref:r,icon:D}))},te=l.forwardRef(oe),le=te,ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"},ie=ae,ce=function(n,r){return l.createElement(B,(0,x.Z)({},n,{ref:r,icon:ie}))},se=l.forwardRef(ce),ue=se,w=a(52322),t=window.document;function P(){return!!(t.fullscreen||t.mozFullScreen||t.webkitIsFullScreen||t.webkitFullScreen||t.msFullScreen)}function fe(){return t.fullscreenEnabled||t.mozFullScreenEnabled||t.webkitFullscreenEnabled||t.msFullscreenEnabled}var de=function(e){if(e===void 0&&(e={}),!fe())return null;var[n,r]=(0,l.useState)(!1);if(n){var o=t.documentElement;o.requestFullscreen?o.requestFullscreen():o.webkitRequestFullScreen?o.webkitRequestFullScreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.msRequestFullscreen&&o.msRequestFullscreen()}else P()&&(t.exitFullscreen?t.exitFullscreen():t.webkitCancelFullScreen?t.webkitCancelFullScreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen());var i=()=>{!P()&&n&&r(!1)};return(0,l.useEffect)(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i,!1)})),(0,l.useMemo)(()=>(0,w.jsx)("span",{onClick:()=>r(!n),style:{fontSize:18,marginRight:10,cursor:"pointer"},children:n?(0,w.jsx)(le,{}):(0,w.jsx)(ue,{})}),[n])}}}]);
