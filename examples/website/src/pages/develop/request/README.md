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

### 页面中调用接口
#### 配合dva调用接口
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

## umi内置 request 和 useRequest
在项目config/config.ts中添加如下 
```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
+ request: {
+    dataField: 'data'
+ },
);
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

### 使用方法

通过 `import { request,useRequest } from '@umijs/max'` 或 `import { request } from '@@/plugin-request'`  你可以使用umi内置的请求方法。

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

### 页面中调用接口

#### ✨配和useRequest调用接口
```jsx
import React from 'react'
import { request,useRequest } from '@umijs/max';

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

## react-query
我们基于react-query进行了二次封装了`useReactQuery` 和 `useReactMutation`，参见[react-query](https://tanstack.com/query/latest)（和 @tanstack/react-query 是同一个）

### 启用方式
由于umi已内置`react-query`,你只需在`congfig/config.ts`中配置

```ts
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
  reactQuery: {
    // devtool: boolean，是否开启 react query 官方 devtool 工具，默认 false
    devtool: false,
    // queryClient: boolean, 是否注册全局的 QueryClient 和 QueryClientProvier，默认 true
    queryClient: false,
  },
);
```

### API 请求 hooks

下面是 API 请求示例，如 GET/POST 请求示例

#### useReactQuery

主要用于**默认**触发请求数据，默认 `GET` 请求，变更使用 `method="POST"` 参数配置

```jsx
useReactQuery({ 
  queryKey: ['user', userId], 
  url: `/api/user/list?id=${userId}`
});
```
<!--rehype:style=background:#00de2247;border: 0;-->

👆👆👆👆 上面是**推荐**使用 👆👆👆👆👆

```jsx
import { fetchFn, useReactQuery } from '@antdp/hooks';

useReactQuery({ queryKey: ['user'], url: '/api/user/list' });
useReactQuery({ queryKey: ['user'], url: '/api/user/list', method: 'POST' });
useReactQuery({ queryKey: ['user', userId], queryFn: () => fetchFn(`/api/user/list?id=${userId}`) });
useReactQuery({
  queryKey: ['user', userId],
  queryFn: async () => {
    return fetchFn(`/api/user/list?id=${userId}`);
  },
});
useReactQuery({
  queryKey: ['user', userId],
  queryFn: ({ queryKey }) => fetchFn(`/api/user/list?id=${queryKey[1]}`);,
});
useReactQuery({
  queryKey: ['user'],
  url: '/api/user/list',
  initialData: [....],
});

const { isInitialLoading, isError, data, error, refetch, isFetching } = useQuery(...)
```

示例

```javascript
import { useReactQuery } from '@antdp/hooks';

export default function HomePage() {
  const { isLoading, isError, data } = useReactQuery({
    url: `/api/user/list`,
    queryKey: ['user-list'],
  });

  return (
    <div>
      <p className="title">x react-query</p>
      {isError && <p>请求 API 错误 ...</p>}
      {isLoading && <p>Loading ...</p>}
      {data && <p>现在有 {data.stargazers_count} 颗星！</p>}
    </div>
  );
}
```

##### Query 选项

```js
const { data } = useReactQuery({
  /** 设置 Content-Type，默认值 `json`，'Content-Type' = 'application/json' */
  contentType: "json" | 'form';
  // 请求 API
  url: '/api/user/list'
  // 用于此查询的查询键。查询键将被 hash 成一个稳定的 hash 。当此键更改时，查询将自动更新（只要 enabled 未设置为 false）
  queryKey: ['user-list', userId],
  // 只要查询成功获取新数据，此函数就会触发。
  onSuccess: (data: TData) => void
  // 如果查询遇到错误并将传递错误，则此函数将触发。
  onError: (error: TError) => void
  // 每当成功获取查询或出错并传递数据或错误时，此函数都会触发。
  onSettled: (data?: TData, error?: TError) => void
  // 此选项可用于转换或选择查询函数返回的部分数据。 它会影响返回的数据值，但不会影响存储在查询缓存中的内容。
  select: (data: TData) => unknown
  select: (dt) => {
    // 改变请求到的 data 数据，返回部分 data 数据
    return dt
  },
  // 将此设置为 true 以启用暂停模式。
  // 当 true 时，useQuery 将在 status === 'loading' 时暂停
  // 当 true 时，useQuery 将在 status === 'error' 时抛出运行时错误
  suspense: true,
  // 将此设置为 false 以禁止此查询自动运行。https://tanstack.com/query/v4/docs/react/guides/dependent-queries
  // 在 userId 存在之前，查询不会执行
  enabled: !!userId,
  // 如果为 false，失败的查询默认不会重试。如果为真，失败的查询将无限重试
  // 如果设置为数字，例如 3、失败的查询会重试，直到失败的查询计数满足那个数
  retry: boolean | number | (failureCount: number, error: TError) => boolean
  // 默认值为 'online'，请参阅网络模式：https://tanstack.com/query/v4/docs/react/guides/network-mode
  networkMode: 'online' | 'always' | 'offlineFirst'
  // 如果设置为 false，如果查询包含错误，则不会在挂载时重试。默认为真
  retryOnMount: boolean
  // 此函数接收一个 retryAttempt 整数和实际错误，并返回在下一次尝试之前应用的延迟（以毫秒为单位）
  // 像 attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000) 这样的函数应用指数退避
  // 像 attempt => attempt * 1000 这样的函数应用线性退避。
  retryDelay: number | (retryAttempt: number, error: TError) => number
  // 默认值为 0，数据被认为过时后的时间（以毫秒为单位）。该值仅适用于定义它的挂钩
  // 如果设置为“Infinity”，数据将永远不会被认为是陈旧的
  staleTime: number | Infinity
  // 在 SSR 期间默认为 5 * 60 * 1000（5 分钟）或无限
  // 未使用(unused)/非活动(inactive)缓存数据保留在内存中的时间（以毫秒为单位）。当查询的缓存变为未使用或不活动时，该缓存数据将在这段时间后被垃圾收集。 当指定不同的缓存时间时，将使用最长的一个
  // 如果设置为 Infinity，将禁用垃圾收集
  cacheTime: number | Infinity
  // 如果设置为一个数字，所有查询将以毫秒为单位以该频率连续重新获取
  // 如果设置为一个函数，该函数将使用最新的数据执行并查询以计算频率
  refetchInterval: number | false | ((data: TData | undefined, query: Query) => number | false)
  // 如果设置为 true，则设置为使用 refetchInterval 连续重新获取的查询将在其选项卡/窗口处于后台时继续重新获取
  refetchIntervalInBackground: boolean
  // 默认为 true
  // 如果设置为 true，如果数据过时，查询将在挂载时重新获取
  // 如果设置为 false，查询将不会在挂载时重新获取
  // 如果设置为 always，查询将始终在挂载时重新获取
  // 如果设置为一个函数，该函数将与查询一起执行以计算值
  refetchOnMount: boolean | "always" | ((query: Query) => boolean | "always")
  // 默认为 true
  // 如果设置为 true，如果数据陈旧，查询将重新获取窗口焦点
  // 如果设置为 false，查询将不会重新获取窗口焦点
  // 如果设置为 always，查询将始终重新获取窗口焦点
  // 如果设置为一个函数，该函数将与查询一起执行以计算值
  refetchOnWindowFocus: boolean | "always" | ((query: Query) => boolean | "always")
  // 默认为 true
  // 如果设置为 true，如果数据过时，查询将在重新连接时重新获取
  // 如果设置为 false，查询将不会在重新连接时重新获取
  // 如果设置为 always，查询将始终重新获取窗口焦点
  // 如果设置为一个函数，该函数将与查询一起执行以计算值
  refetchOnReconnect: boolean | "always" | ((query: Query) => boolean | "always")
  // 如果设置，组件将仅在任何列出的属性更改时重新渲染
  // 例如，如果设置为 ['data', 'error']，组件将仅在数据或错误属性更改时重新呈现
  // 如果设置为“all”，组件将选择退出智能跟踪并在更新查询时重新呈现
  // 默认情况下，将跟踪对属性的访问，并且仅当跟踪的属性之一发生更改时，组件才会重新呈现
  notifyOnChangeProps: string[] | "all"
  // 如果设置，此值将用作查询缓存的初始数据（只要尚未创建或缓存查询）
  // 如果设置为一个函数，该函数将在共享/根查询初始化期间被调用一次，并期望同步返回 initialData
  // 默认情况下，初始数据被认为是陈旧的，除非设置了 staleTime。
  // initialData 被持久化到缓存
  initialData: TData | () => TData
  // 如果设置，该值将用作上次更新 initialData 本身的时间（以毫秒为单位）。
  initialDataUpdatedAt: number | (() => number | undefined)
  // 如果设置，当查询仍在加载数据中且未提供 initialData 时，此值将用作此特定查询观察器的占位符数据。
  // `placeholderData` 不会持久化到缓存
  placeholderData: TData | () => TData
  // 默认为 false 如果设置，则在获取新数据时将保留任何以前的数据，因为查询键已更改。
  keepPreviousData: boolean
  // 默认为 true 如果设置为 false，将禁用查询结果之间的结构共享
  // 如果设置为一个函数，旧数据值和新数据值将通过该函数传递，该函数应将它们组合成解析数据以供查询。 这样，您可以保留旧数据的引用以提高性能，即使该数据包含不可序列化的值也是如此
  structuralSharing: boolean | ((oldData: TData | undefined, newData: TData) => TData)
  // 默认为全局查询配置的 useErrorBoundary 值，未定义
  // 如果您希望在渲染阶段抛出错误并传播到最近的错误边界，请将此设置为 true
  // 将此设置为 false 以禁用 suspense 将错误抛出到错误边界的默认行为
  // 如果设置为函数，它将传递错误和查询，它应该返回一个布尔值，指示是在错误边界中显示错误 (true) 还是将错误作为状态返回 (false)
  useErrorBoundary: undefined | boolean | (error: TError, query: Query) => boolean
  // 如果设置，则存储有关查询缓存条目的附加信息，可根据需要使用。 只要查询可用，它就可以访问，它也是提供给 queryFn 的 QueryFunctionContext 的一部分
  meta: Record<string, unknown>
  // 使用它来使用自定义 React 查询上下文。 否则，将使用 defaultContext
  context: React.Context<QueryClient | undefined>
});
```

##### Fetch 选项

请求 `fetch` 相关参数 

```js
const { data } = useReactQuery({
  /** 用于设置请求正文的 BodyInit 对象或 null。*/
  body?: BodyInit | null;
  /** 一个字符串，指示请求将如何与浏览器的缓存交互以设置请求的缓存。*/
  cache?: RequestCache;
  /** 一个字符串，指示凭据是始终、从不还是仅在发送到同源 URL 时随请求一起发送。 设置请求的凭据。*/
  credentials?: RequestCredentials;
  /** Headers 对象、对象字面量或包含两项的数组，用于设置请求的标头。*/
  headers?: HeadersInit;
  /** 要按请求获取的资源的加密哈希。 设置请求的完整性。*/
  integrity?: string;
  /** 设置请求的保活的布尔值。*/
  keepalive?: boolean;
  /** 设置请求方法的字符串。(GET|POST|PUT....)*/
  method?: string;
  /** 一个字符串，指示请求是使用 CORS，还是仅限于同源 URL。 设置请求的模式。*/
  mode?: RequestMode;
  /** 一个字符串，指示请求是否遵循重定向、在遇到重定向时导致错误或返回重定向（以不透明的方式）。 放s request's redirect. */
  redirect?: RequestRedirect;
  /** 一个字符串，其值为同源 URL、“about:client”或空字符串，用于设置请求的引荐来源网址。*/
  referrer?: string;
  /** 设置请求的 referrerPolicy 的引用策略。*/
  referrerPolicy?: ReferrerPolicy;
  /** 用于设置请求信号的 AbortSignal。*/
  signal?: AbortSignal | null;
  /** 只能为空。 用于解除来自任何窗口的请求。*/
  window?: null;
});
```

#### useReactMutation

用于触发的 `API` 请求

```jsx
useReactMutation({
  mutationKey: ['user', dataForm],
  url: '/api/login'
});
```
<!--rehype:style=background:#00de2247;border: 0;-->

👆👆👆👆 上面是**推荐**使用，**dataForm** 用于给 `body` 传递的 *json* 数据 👆👆👆👆👆

```javascript
import { fetchFn, useReactMutation } from '@antdp/hooks';

useReactMutation({ mutationKey: ['user'], url: '/api/login' });
useReactMutation({ mutationKey: ['user'], url: '/api/login', method: 'PUT' });
useReactMutation({ mutationKey: ['user', dataForm], url: '/api/login' });
useReactMutation({
  mutationKey: ['user', dataForm], 
  mutationFn: () => fetchFn(`/api/login?id=${dataForm.userId}`, { method: 'PUT' })
});
useReactMutation({
  mutationKey: ['user', dataForm],
  mutationFn: () => fetchFn('/api/login', { method: 'POST', body: JSON.stringify(dataForm) }),
});
useReactMutation({
  mutationKey: ['user', dataForm],
  mutationFn: async () => {
    return fetchFn(`/api/login?id=${dataForm.username}`, { method: 'DELETE', body: JSON.stringify(dataForm) });
  },
});
useReactMutation({
  mutationKey: ['user', dataForm],
  mutationFn: (data) => {
    return fetchFn(`/api/login`, { method: 'POST', body: JSON.stringify(data) })
  },
});
```

**登录页面**示例

```javascript
import UserLogin from '@antdp/user-login';
import { useReactMutation } from '@antdp/hooks';

const UserLayout = (props) => {
  const mutation = useReactMutation({ url: '/api/users/login' });
  return (
      <UserLogin
        projectName="Antdp"
        onFinish={async (values) => {
          const { code, token, data } = await mutation.mutateAsync(values);
          // 请求成功后操作
        }}
        type="account"
        loading={mutation.loading}
        formBtns={[
          {
            label: '登录',
            attr: {
              type: 'primary',
              htmlType: 'submit',
              style: {
                marginRight: 20,
              },
            },
          },
          {
            label: '重置',
            attr: {
              type: 'primary',
            },
          },
        ]}
      >
      </UserLogin>
  );
};

export default UserLayout;

```

在任何给定时刻，`mutation` 只能处于以下状态之一：

- `isIdle` or `status === 'idle'` - mutation 当前处于空闲状态或处于新鲜/重置状态
- `isLoading` or `status === 'loading'` - mutation 当前正在运行
- `isError` or `status === 'error'` - mutation 遇到错误
- `isSuccess` or `status === 'success'` - mutation 成功并且 mutation 数据可用

除了这些主要状态之外，还可以根据 `mutation` 状态获得更多信息：

- `error` - 如果 mutation 处于错误状态，则可以通过 error 属性获得错误。
- `data` - 如果 mutation 处于成功状态，则数据可通过 data 属性获得。

```javascript
const mutation = useReactMutation({
  url: '/api/login',
  mutationKey: ['user-login', data],
  method: 'PUT'
});
```

##### 副作用 mutation 选项

```js
const mutation = useReactMutation({
  url: '/api/login',
  onMutate: (variables) => {
    // mutation 即将发生！
    
    // 可选地返回包含数据的上下文，例如在回滚时使用
    return { id: 1 }
  },
  onError: (error, variables, context) => {
    // 发生错误！
    console.log(`rolling back optimistic update with id ${context.id}`)
  },
  onSuccess: (data, variables, context) => {
    // Boom baby!
  },
  onSettled: (data, error, variables, context) => {
    // 错误或成功......没关系！
  },
})
```

您可能会发现，在调用 `mutate` 时，您想要触发除 `useReactMutation` 上定义的回调之外的其他回调。 这可用于触发组件特定的副作用。 为此，您可以在 `mutate` 变量之后向 `mutate` 函数提供任何相同的回调选项。 支持的选项包括：`onSuccess`、`onError` 和 `onSettled`。 请记住，如果您的组件在变更完成之前卸载，那么这些额外的回调将不会运行。

```js
mutation.mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
})
```

### Query Keys

TanStack Query 的核心是基于查询键为您管理查询缓存。查询键必须是顶层的数组，并且可以像具有单个字符串的数组一样简单，也可以像包含许多字符串和嵌套对象的数组一样复杂。 只要查询键是可序列化的，并且对于查询数据是唯一的，就可以使用它！

```js
useReactQuery({
  url: `https://api.example.com/users?status=${status}&page=${page}`,
  queryKey: ['use-list', { status, page }],
});
```

### 请求重试

```js
const { isLoading, isError, data } = useReactQuery({
  url: `/api/user/list?id=${userId}`,
  queryKey: ['user-list', userId],
  retry: 10, // 在显示错误之前将重试失败的请求 10 次
});
```



## License

Licensed under the MIT License.