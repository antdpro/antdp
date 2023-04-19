# 网络请求
简介
对于中后台应用来说，很大一部分工作就在于请求后端的 CRUD 的接口，为进一步降低用户对请求层的感知，我们移除了默认生成的 utils/request.ts 文件，改成通过配置化的方式暴露给开发者做请求的配置和增强处理；同时通过业务总结出一套标准的接口结构规范，并提供统一的接口解析、错误处理的能力；后续将持续完善可配置项、提供垂直场景如列表、登录失效等解决方案。
## request

系统的请求基于umi-request进行了二次封装，参见[umi-request](https://github.com/umijs/umi-request)

## 方法
基于restful规范，提供了2个方法：
- get 获取服务端数据，参数拼接在url上，以 query string 方式发送给后端
- post 新增数据，参数以body形式发送给后端


## 参数

| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| url | 请求地址 | string        | -      |

### Options
| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| method | 请求方法 | `POST \| GET`    | -      |
| data | 请求传递给后端的参数 | any      | -      |

## 调用方式

### ✨配和useRequest调用接口
```jsx
import React from 'react'
import { useRequest } from '@umijs/max';
import request from "@antdp/request"

const Index = () => {
  const selectById  = (params) => request("/api/selectById",{ method:"POST",body: { ...params } })
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
### 在dva中使用
> 在servers/index.js中
```ts
import { request } from "@uiw-admin/utils"

export const selectById  = (params) => request("/api/selectById",{ method:"POST",body: { ...params } })

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