"use strict";(self.webpackChunk_example_website=self.webpackChunk_example_website||[]).push([[177],{67177:function(R,i,s){s.r(i),s.d(i,{default:function(){return h}});var c=s(2784),a=s(7896),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"},L=F,f=s(9760),m=function(l,r){return c.createElement(f.Z,(0,a.Z)({},l,{ref:r,icon:L}))},v=c.forwardRef(m),x=v,E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"},z=E,w=function(l,r){return c.createElement(f.Z,(0,a.Z)({},l,{ref:r,icon:z}))},S=c.forwardRef(w),b=S,t=s(52322),e=window.document;function d(){return!!(e.fullscreen||e.mozFullScreen||e.webkitIsFullScreen||e.webkitFullScreen||e.msFullScreen)}function O(){return e.fullscreenEnabled||e.mozFullScreenEnabled||e.webkitFullscreenEnabled||e.msFullscreenEnabled}var h=function(u){if(u===void 0&&(u={}),!O())return null;var[l,r]=(0,c.useState)(!1);if(l){var n=e.documentElement;n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullScreen?n.webkitRequestFullScreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.msRequestFullscreen&&n.msRequestFullscreen()}else d()&&(e.exitFullscreen?e.exitFullscreen():e.webkitCancelFullScreen?e.webkitCancelFullScreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.msExitFullscreen&&e.msExitFullscreen());var o=()=>{!d()&&l&&r(!1)};return(0,c.useEffect)(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o,!1)})),(0,c.useMemo)(()=>(0,t.jsx)("span",{onClick:()=>r(!l),style:{fontSize:18,marginRight:10,cursor:"pointer"},children:l?(0,t.jsx)(x,{}):(0,t.jsx)(b,{})}),[l])}}}]);
