"use strict";(self.webpackChunk_example_website=self.webpackChunk_example_website||[]).push([[33],{69613:function(U,u,e){var l=e(8058).default;Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var a=l(e(94046)),F=l(e(2784)),r=e(85559),n=e(52322),E=void 0,v=function(i){var c=i.optConfig,d=i.isEditing,o=i.isAddEdit,b=i.save,t=i.isOptDelete,y=i.cancel,S=i.onDelete,D=i.edit,T=i.newAdd,P=i.editingKey,p=i.rowKey,O=i.multiple;return[(0,a.default)((0,a.default)({title:"\u64CD\u4F5C",align:"center",width:120},c),{},{render:function(V,h,N){var A=d(h),x=o(h);return c&&c.render?c.render(V,h,N,{editable:A,isNewAdd:x,save:b,cancel:y,onDelete:S,edit:D,newAdd:T,editingKey:P}):A?(0,n.jsxs)("span",{children:[(0,n.jsx)(r.Typography.Link,{onClick:function(){return b(h[p],h,N)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,n.jsx)(r.Popconfirm,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:x?S.bind(E,h[p],h,N):y.bind(E,h[p]),children:(0,n.jsx)(r.Typography.Link,{children:"\u53D6\u6D88"})})]}):(0,n.jsxs)(r.Space,{children:[(0,n.jsx)(r.Typography.Link,{disabled:!!P.length&&!O,onClick:function(){return D(h)},children:"\u7F16\u8F91"}),t&&(0,n.jsx)(r.Popconfirm,{title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return S(h[p],h,N)},children:(0,n.jsx)(r.Typography.Link,{children:"\u5220\u9664"})})]})}})]},I=u.default=v;U.exports=u.default},99090:function(U,u,e){var l=e(8058).default;Object.defineProperty(u,"__esModule",{value:!0}),u.useStore=u.default=void 0;var a=l(e(80383)),F=l(e(29960)),r=l(e(82906)),n=l(e(2784)),E=(0,a.default)(function w(){var i=this;(0,F.default)(this,w),(0,r.default)(this,"store",{}),(0,r.default)(this,"remove",function(c){delete i.store["".concat(c)]}),(0,r.default)(this,"register",function(c,d){i.store["".concat(c)]=d}),(0,r.default)(this,"getStore",function(){return i.store}),(0,r.default)(this,"getToKeyForm",function(c){return i.store["".concat(c)]})}),v=u.useStore=function(i){var c=n.default.useRef();return i?c.current=i:c.current=new E,[c.current]},I=u.default=E},11147:function(U,u,e){var l=e(8058).default;Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.EditableCellItem=void 0;var a=l(e(94046)),F=l(e(5827)),r=l(e(2784)),n=e(85559),E=l(e(5040)),v=e(52091),I=e(52322),w=["editing","dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","multiple","rowKey","isList","listAttr"],i=["name","rules","preName","itemValue","children","tipAttr","tip"],c=function(t){var y=t.editing,S=t.dataIndex,D=t.title,T=t.record,P=t.index,p=t.inputNode,O=t.rules,m=t.children,V=t.itemAttr,h=t.type,N=t.attr,A=t.tip,x=t.tipAttr,R=t.multiple,L=t.rowKey,j=t.isList,W=t.listAttr,J=(0,F.default)(t,w),z=(0,v.getItem)({attr:N,type:h,inputNode:p}),H=function(){return j&&typeof p=="function"?(0,I.jsx)(E.default.List,(0,a.default)((0,a.default)({},W),{},{name:S,children:function(X,ae,Y){return p(X.map(function(Z){return(0,a.default)((0,a.default)({},Z),{},{fieldKey:Z.key})}),ae,Y)}})):(0,I.jsx)(d,(0,a.default)((0,a.default)({},V),{},{name:S,rules:O,preName:T[L],itemValue:T,children:z,tipAttr:x,tip:A}))};return(0,I.jsx)("td",(0,a.default)((0,a.default)({},J),{},{children:y?H():m}))},d=u.EditableCellItem=function(t){var y=t.name,S=t.rules,D=t.preName,T=D===void 0?"":D,P=t.itemValue,p=t.children,O=t.tipAttr,m=O===void 0?{}:O,V=t.tip,h=(0,F.default)(t,i);return(0,I.jsx)(E.default.Field,(0,a.default)((0,a.default)({},h),{},{name:y,rules:S,children:function(A,x,R){var L=(0,v.toArray)(y).length&&x?x.name:[],j=(0,v.getFieldId)(L,T),W=function(G){var Q=G;G&&G.target&&(Q=G.target.value),A.onChange(Q)},J=typeof p=="function"?p((0,a.default)((0,a.default)({},A),{},{id:j}),x,R,{record:P}):r.default.isValidElement(p)?r.default.cloneElement(p,(0,a.default)((0,a.default)({},A),{},{onChange:W,id:j})):p,z=x.errors.map(function(H){return H}).join(",");return(0,I.jsx)(n.Tooltip,(0,a.default)((0,a.default)({color:"#fff",overlayInnerStyle:{color:"red"}},m),{},{title:V?V(z):z,open:!!x.errors.length,children:J}))}}))},o=u.default=c},79895:function(U,u,e){var l=e(8058).default;Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.EditForms=void 0;var a=l(e(94046)),F=l(e(65585)),r=l(e(2784)),n=l(e(5040)),E=l(e(99090)),v=e(52322),I=void 0,w=u.EditForms=r.default.createContext({formsRef:new E.default,dataSource:[],rowKey:"id",onValuesChange:function(o,b,t,y){}}),i=function(o){var b=n.default.useForm(),t=(0,F.default)(b,1),y=t[0],S=r.default.useContext(w),D=S.formsRef,T=S.onValuesChange,P=T===void 0?function(){}:T,p=S.dataSource,O=S.rowKey;r.default.useEffect(function(){return function(){return D.remove("".concat(o["data-row-key"]))}},[]),D.register("".concat(o["data-row-key"]),y);var m=p.find(function(V){return"".concat(V[O])==="".concat(o["data-row-key"])});return(0,v.jsx)(n.default,{onValuesChange:P.bind(I,"".concat(o["data-row-key"]),y),form:y,name:"".concat(o["data-row-key"]),component:!1,initialValues:m||{},children:(0,v.jsx)("tr",(0,a.default)({},o))})},c=u.default=i},79814:function(U,u,e){var l=e(8058).default,a=e(33769).default;Object.defineProperty(u,"__esModule",{value:!0}),Object.defineProperty(u,"Store",{enumerable:!0,get:function(){return d.default}}),u.default=void 0;var F=l(e(28332)),r=l(e(20298)),n=l(e(85338)),E=l(e(82906)),v=l(e(94046)),I=l(e(65585)),w=l(e(5827)),i=a(e(2784)),c=e(85559),d=a(e(99090)),o=a(e(79895)),b=a(e(11147)),t=l(e(69613)),y=e(52322),S=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","store"],D=function(m,V){var h=m.columns,N=m.dataSource,A=N===void 0?[]:N,x=m.onBeforeSave,R=m.onSave,L=m.rowKey,j=L===void 0?"id":L,W=m.optIsFirst,J=W===void 0?!1:W,z=m.optConfig,H=z===void 0?{}:z,G=m.isOptDelete,Q=G===void 0?!1:G,X=m.initValue,ae=X===void 0?{}:X,Y=m.onValuesChange,Z=m.isAdd,ue=m.onErr,le=m.multiple,k=le===void 0?!1:le,de=m.onBeforeAdd,oe=m.isOpt,Ee=oe===void 0?!0:oe,fe=m.addBtnProps,se=fe===void 0?{}:fe,Ie=m.store,xe=(0,w.default)(m,S),Re=(0,d.useStore)(Ie),De=(0,I.default)(Re,1),q=De[0],Te=(0,i.useState)([]),ce=(0,I.default)(Te,2),_=ce[0],ne=ce[1],Pe=i.default.useState([]),ve=(0,I.default)(Pe,2),ee=ve[0],me=ve[1],re=function(f){ne(function(g){return g.filter(function(C){return"".concat(C)!=="".concat(f)})}),me(function(g){return g.filter(function(C){return"".concat(C)!=="".concat(f)})})},Ke=i.default.useMemo(function(){return h.filter(function(s){return s.editable}).map(function(s){return s.dataIndex})},[h]),ge=function(f){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=q.getStore();C["".concat(f)]&&C["".concat(f)].setFieldsValue(g)},he=function(f){var g=q.getStore();return g["".concat(f)]},ie=function(f){return _.includes("".concat(f[j]))},be=function(f){return ee.includes("".concat(f[j]))},ye=function(){if(!(de&&!de())){if(ee.length===1&&!k){c.message.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");return}if(_.length===1&&!k){c.message.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");return}var f=(new Date().getTime()*Math.round(10)).toString(),g=(0,v.default)((0,v.default)({},ae||{}),{},(0,E.default)({},j,f)),C=A.concat([g]);ne(function($){return $.concat([f])}),me(function($){return $.concat([f])}),R&&R(C,g)}},pe=function(f){var g=(0,v.default)({},f);ge(f[j],g),ne(function(C){return C.concat(["".concat(f[j])])})},je=function(f){re(f),ge(f,{})},Ce=function(f,g,C){var $=A.filter(function(M){return"".concat(M[j])!=="".concat(f)});re(f),R&&R($,g,g,C)},Se=function(){var s=(0,n.default)((0,F.default)().mark(function f(g,C,$){var M,B,te,Fe;return(0,F.default)().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.prev=0,K.next=3,he(g).validateFields();case 3:if(M=K.sent,!(x&&!x(M,C,$))){K.next=6;break}return K.abrupt("return");case 6:B=(0,r.default)(A),te=B.findIndex(function($e){return"".concat(g)==="".concat($e[j])}),te>-1?(Fe=B[te],B.splice(te,1,(0,v.default)((0,v.default)({},Fe),M))):B.push(M),R&&R(B,M,C,$),re(g),he(g).resetFields(Ke),K.next=17;break;case 14:K.prev=14,K.t0=K.catch(0),ue&&ue(K.t0);case 17:case"end":return K.stop()}},f,null,[[0,14]])}));return function(g,C,$){return s.apply(this,arguments)}}(),Ae=Ee&&(0,t.default)({optConfig:H,isEditing:ie,isAddEdit:be,save:Se,isOptDelete:Q,cancel:je,onDelete:Ce,edit:pe,newAdd:ee,editingKey:_,rowKey:j,multiple:k})||[],Oe=J?Ae.concat(h):h.concat(Ae),Ve=Oe.map(function(s){return s.editable?(0,v.default)((0,v.default)({},s),{},{onCell:function(g){return{record:g,multiple:k,rowKey:j,dataIndex:s.dataIndex,title:s.title,editing:ie(g),inputNode:s.inputNode,rules:s.rules||[],itemAttr:s.itemAttr,type:s.type,attr:s.attr,tip:s.tip,tipAttr:s.tipAttr,isList:s.isList,listAttr:s.listAttr}}}):s}),Ne=function(f,g,C,$){if(Y){var M=A.map(function(B){return"".concat(f)==="".concat(B[j])?(0,v.default)((0,v.default)({},B),$):(0,v.default)({},B)});Y(M,C,$,f,g)}};return i.default.useImperativeHandle(V,function(){return{save:Se,onDelete:Ce,edit:pe,cancel:je,add:ye,isEditing:ie,editingKey:_,newAdd:ee,forms:q}}),(0,y.jsx)(i.default.Fragment,{children:(0,y.jsxs)(o.EditForms.Provider,{value:{formsRef:q,onValuesChange:Ne,dataSource:A,rowKey:j},children:[(0,y.jsx)(c.Table,(0,v.default)((0,v.default)({size:"small",bordered:!0},xe),{},{components:{body:{row:o.default,cell:b.default}},rowKey:j,dataSource:A,columns:Ve,rowClassName:"editable-row",pagination:!1})),Z&&(0,y.jsx)(c.Button,(0,v.default)((0,v.default)({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},se||{}),{},{style:(0,v.default)({marginTop:10},(se||{}).style||{}),onClick:ye}))]})})},T=i.default.forwardRef(D),P=T;P.useStore=d.useStore,P.Item=b.EditableCellItem;var p=u.default=P},52091:function(U,u,e){var l=e(8058).default;Object.defineProperty(u,"__esModule",{value:!0}),u.getFieldId=v,u.getItem=void 0,u.toArray=I;var a=l(e(94046)),F=l(e(2784)),r=e(85559),n=e(52322),E=r.DatePicker.RangePicker;function v(i,c){if(i.length){var d=i.join("_");return c?"".concat(c,"_").concat(d):d}}function I(i){return i===void 0||i===!1?[]:Array.isArray(i)?i:[i]}var w=u.getItem=function(c){var d=c.attr,o=c.type,b=c.inputNode,t=void 0;if(o==="Input"){var y=d;t=(0,n.jsx)(r.Input,(0,a.default)({},y))}else if(o==="TextArea"){var S=d;t=(0,n.jsx)(r.Input.TextArea,(0,a.default)({},S))}else if(o==="InputNumber"){var D=d;t=(0,n.jsx)(r.InputNumber,(0,a.default)({},D))}else if(o==="AutoComplete"){var T=d;t=(0,n.jsx)(r.AutoComplete,(0,a.default)({},T))}else if(o==="Cascader"){var P=d;t=(0,n.jsx)(r.Cascader,(0,a.default)({},P))}else if(o==="DatePicker"){var p=d;t=(0,n.jsx)(r.DatePicker,(0,a.default)({},p))}else if(o==="Rate"){var O=d;t=(0,n.jsx)(r.Rate,(0,a.default)({},O))}else if(o==="Slider"){var m=d;t=(0,n.jsx)(r.Slider,(0,a.default)({},m))}else if(o==="TreeSelect"){var V=d;t=(0,n.jsx)(r.TreeSelect,(0,a.default)({},V))}else if(o==="Select"){var h=d;t=(0,n.jsx)(r.Select,(0,a.default)({},h))}else if(o==="Checkbox"){var N=d;t=(0,n.jsx)(r.Checkbox.Group,(0,a.default)({},N))}else if(o==="Mentions"){var A=d;t=(0,n.jsx)(r.Mentions,(0,a.default)({},A))}else if(o==="Radio"){var x=d;t=(0,n.jsx)(r.Radio.Group,(0,a.default)({},x))}else if(o==="Switch"){var R=d;t=(0,n.jsx)(r.Switch,(0,a.default)({},R))}else if(o==="TimePicker"){var L=d;t=(0,n.jsx)(r.TimePicker,(0,a.default)({},L))}else if(o==="Upload"){var j=d;t=(0,n.jsx)(r.Upload,(0,a.default)({},j))}else if(o==="RangePicker"){var W=d;t=(0,n.jsx)(E,(0,a.default)({},W))}else o==="Custom"&&(t=b);return t}},62033:function(U,u,e){var l=e(33769).default;Object.defineProperty(u,"__esModule",{value:!0});var a={};u.default=void 0;var F=l(e(79814));Object.keys(F).forEach(function(n){n==="default"||n==="__esModule"||Object.prototype.hasOwnProperty.call(a,n)||n in u&&u[n]===F[n]||Object.defineProperty(u,n,{enumerable:!0,get:function(){return F[n]}})});var r=u.default=F.default}}]);