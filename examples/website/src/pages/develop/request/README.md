# 请求
简介
对于中后台应用来说，很大一部分工作就在于请求后端的 CRUD 的接口，为进一步降低用户对请求层的感知，我们移除了默认生成的 utils/request.ts 文件，改成通过配置化的方式暴露给开发者做请求的配置和增强处理；同时通过业务总结出一套标准的接口结构规范，并提供统一的接口解析、错误处理的能力；后续将持续完善可配置项、提供垂直场景如列表、登录失效等解决方案。
## request

我们基于umi-request进行了二次封装了@antp/request，参见[umi-request](https://github.com/umijs/umi-request)

### 参数

| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| url | 请求地址 | string        | -      |

### Options
| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| method | 请求方法 | `POST \| GET`    | -      |
| data | 请求传递给后端的参数 | any      | -      |

### 使用方法
```js
import request from '@antdp/request';
request('/api/user', {method:'POST' ,data: { name : 1 }})
```

## 配置umi内置 request 和 useRequest
在项目config/config中添加如下 
```diff
export default {
+  request: {
+    dataField: 'data'
+  },
};
```
构建时配置可以为 useRequest 配置 dataField ，该配置的默认值是 data。该配置的主要目的是方便 useRequest 直接消费数据。如果你想要在消费数据时拿到后端的原始数据，需要在这里配置 dataField 为 '' 。

比如你的后端返回的数据格式如下。

```js
{
  success: true,
  data: 123,
  code: 1,
}
```

那么 `useRequest` 就可以直接消费 `data`。其值为 123，而不是 `{ success, data, code }`

## umi内置request

通过 `import { request } from '@@/plugin-request'` 或 `import { request } from '@umijs/max'` 你可以使用umi内置的请求方法。

`request` 接收的 `options`除了透传 [axios](https://axios-http.com/docs/req_config) 的所有 config 之外，umi还额外添加了几个属性 `skipErrorHandler`，`getResponse`，`requestInterceptors` 和 `responseInterceptors` 。

示例如下：

```js
request('/api/user', {
  params: { name : 1 },
  timeout: 2000,
  // other axios options
  skipErrorHandler: true,
  getResponse: false,
  requestInterceptors: [],
  responseInterceptors: [],
}
```

当你的某个请求想要跳过错误处理时，可以通过将`skipErrorHandler`设为 `true` 来实现

request 默认返回的是你后端的数据，如果你想要拿到 axios 完整的 response 结构，可以通过传入 `{ getResponse: true }` 来实现。

`requestInterceptors` 和 `responseInterceptors` 的写法同运行时配置中的拦截器写法相同，它们为 request 注册拦截器。区别在于这里注册的拦截器是 "一次性" 的。另外，这里写的拦截器会在运行时配置中的拦截器之后被注册。**

<strong>注意： 当你使用了 errorHandler 时，在这里注册的 response 拦截器会失效，因为在 errorHandler 就会 throw error</strong>


## 页面中调用接口
### ✨配和useRequest调用接口
```jsx
import React from 'react'
import { useRequest } from '@umijs/max';
import request from "@antdp/request"

const Index = () => {
  const selectById  = (params) => request("/api/selectById",{ method:"POST",data: { ...params } })
  const [ name ,setName ] = React.useState('')
  const { run, loading } = useRequest(selectById,
    manual: true,
    onSuccess: (req) => {
      setName(req);
    },
  )

  React.useEffect(()=>run( id:1 ),[])

  return <div>{name}</div>
}
export default Index
```
### 配合dva调用接口
> 在servers/index.js中
```ts
import { request } from "@uiw-admin/utils"

export const selectById  = (params) => request("/api/selectById",{ method:"POST",data: { ...params } })

```
> 在model/index.js中
```js
import { selectById } from '../servers';

export default {
  namespace:'index',
  state:{
    name:'',
  },
  reducers:{
    updateState: (state, payload) => ({
      ...state,
      ...payload,
    }),
  },
  effects:{
    selectById({ paylog },{ call,put }){
      const data = yield call(selectById, payload);
      if(data.code === 1){
        yield put({
          type: 'updateData',
          paylog:{
            name:data.data
          }
        })
      }
    }
  }
}

```

> 在页面中调用
```jsx
import React from 'react';
import { useDispatch, useSelector } from 'dva';

export default const Index = () => {
  const dispatch = useDispatch()
  const { name } = useSelector(state => state.index) || {}
  React.useEffect(()=>{
     dispatch({
      type: 'index/selectById',
      payload:{ id:1 },
    })
  },[])
  return <div>{name}</div>
}
```

## License

Licensed under the MIT License.