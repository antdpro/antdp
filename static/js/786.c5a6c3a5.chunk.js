"use strict";(self.webpackChunk_example_website=self.webpackChunk_example_website||[]).push([[786],{54249:function(e,t,r){r.r(t),t.default={components:{9:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var n=o(r);if(n&&n.has(t))return n.get(t);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var u=i?Object.getOwnPropertyDescriptor(t,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=t[l]}a.default=t,n&&n.set(t,a);return a}(r(81949)),n=r(3124);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(f){c=!0,o=f}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=a((0,t.useState)([]),2),r=e[0],o=e[1],i=t.default.createElement("div",null,t.default.createElement("div",null,"Upload"));return t.default.createElement("div",null,t.default.createElement(n.UploadGrid,{action:"",listType:"picture-card",fileList:r,onChange:function(e){var t=e.fileList;return o(t)}},r.length>=9?null:i))}}()},data:{9:{name:9,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _antdpUi = require("@antdp/antdp-ui");\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // ```jsx\nvar Demo = function Demo() {\n  var _useState = (0, _react.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    fileList = _useState2[0],\n    setFileList = _useState2[1];\n  var uploadButton = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, "Upload"));\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_antdpUi.UploadGrid, {\n    action: "",\n    listType: "picture-card",\n    fileList: fileList,\n    onChange: function onChange(_ref) {\n      var fileList = _ref.fileList;\n      return setFileList(fileList);\n    }\n  }, fileList.length >= 9 ? null : uploadButton));\n};\nreturn Demo;',language:"jsx",value:"// ```jsx\nimport React, { useState } from 'react';\nimport { UploadGrid } from '@antdp/antdp-ui'\nconst Demo = () => {\n  const [fileList,setFileList] = useState([])\n  const uploadButton = (\n    <div>\n      <div>Upload</div>\n    </div>\n  );\n  return (\n    <div>\n      <UploadGrid\n        action=\"\"\n        listType=\"picture-card\"\n        fileList={fileList}\n        onChange={({ fileList }) =>setFileList(fileList)}\n      >\n        {fileList.length >= 9 ? null : uploadButton}\n      </UploadGrid>\n    </div>\n  )\n}\n\nexport default Demo;"}},source:"UploadGrid \u53ef\u62d6\u62fd\u4e0a\u4f20\u7ec4\u4ef6\n---\n\nUploadGrid \u53ef\u62d6\u62fd\u4e0a\u4f20\u7ec4\u4ef6\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx  mdx:preview\n// ```jsx\nimport React, { useState } from 'react';\nimport { UploadGrid } from '@antdp/antdp-ui'\nconst Demo = () => {\n  const [fileList,setFileList] = useState([])\n  const uploadButton = (\n    <div>\n      <div>Upload</div>\n    </div>\n  );\n  return (\n    <div>\n      <UploadGrid\n        action=\"\"\n        listType=\"picture-card\"\n        fileList={fileList}\n        onChange={({ fileList }) =>setFileList(fileList)}\n      >\n        {fileList.length >= 9 ? null : uploadButton}\n      </UploadGrid>\n    </div>\n  )\n}\n\nexport default Demo;\n```\n\x3c!--End--\x3e\n\n### Props\n\u7ec4\u4ef6\u7ee7\u627f [`antd Upload`](https:ant.design/components/upload-cn/#header)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| -------- | -------- | -------- | -------- |\n| onChange | \u70b9\u51fb\u4e0a\u4f20\u7684\u56de\u8c03\u51fd\u6570 | `(params: { fileList: UploadFile[] }) => void`  |- |\n| useDragHandle | \u662f\u5426\u53ef\u4ee5\u62d6\u62fd| boolean | - |\n| children | \u7ec4\u4ef6\u6e32\u67d3\u7684\u5185\u5bb9 | ReactNode | - |\n\n"}}}]);
//# sourceMappingURL=786.c5a6c3a5.chunk.js.map