# 数据流
@umijs/max 内置了数据流管理插件，它是一种基于 hooks 范式的轻量级数据管理方案，可以在 antdp 项目中管理全局的共享数据。

```ts
// config/config.ts
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
  model: {},
});
```
## 开始使用

### 创建 Model

数据流管理插件采用约定式目录结构，我们约定可以在 `src/models`, `src/pages/xxxx/models/`目录中，和 `src/pages/xxxx/model.{js,jsx,ts,tsx}` 文件引入 Model 文件。 Model 文件允许使用 `.(tsx|ts|jsx|js)` 四种后缀格式，命名空间（namespace） 生成规则如下。

| 路径 | 命名空间 | 说明 |
| :--- |:--- | :--- |
| `src/models/count.ts` | `count` | `src/models` 目录下不支持目录嵌套定义 model |
| `src/pages/pageA/model.ts` | `pageA.model` |  |
| `src/pages/pageB/models/product.ts` | `pageB.product` |  |
| `src/pages/pageB/models/fruit/apple.ts` | `pageB.fruit.apple` |  `pages/xxx/models` 下 model 定义支持嵌套定义 |

所谓的 Model，就是一个自定义的 `hooks`，没有任何使用者需要关注的“黑魔法”。

当我们需要获取 Model 中的全局数据时，调用该命名空间即可。例如，对于 Model 文件 `userModel.ts`，它的命名空间为 `userModel`。

编写一个默认导出的函数：

```ts
// src/models/userModel.ts
export default function Page() {
  const user = {
    username: 'umi',
  };

  return { user };
};
```

这就是一个 Model。插件所做的工作就是将其中的状态或数据变成了**全局数据**，不同的组件在使用该 Model 时，拿到的是同一份状态或数据。

<strong>
Model 文件需要默认导出一个函数，此函数定义了一个 `hook`。对于不符合此规范的文件，将会被过滤掉，并无法通过命名空间调用。
</strong>

Model 中允许使用其它 `hooks`，以计数器为例：

```ts
// src/models/counterModel.ts
import { useState, useCallback } from 'react';

export default function Page() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);

  return { counter, increment, decrement };
};
```

在项目实践中，我们通常需要请求后端接口，来获取所需的数据。现在让我们来扩展前面获取用户信息的例子：

```ts
// src/models/userModel.ts
import { useState } from 'react';
import { getUser } from '@/services/user';

export default function Page() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
      setLoading(false);
    });
  }, []);

  return {
    user,
    loading,
  };
};
```

如果您在项目中使用了 [ahooks](https://ahooks.js.org)，可以像这样组织您的代码：

```ts
// src/models/userModel.ts
import { useRequest } from 'ahooks';
import { getUser } from '@/services/user';

export default function Page() {
  const { data: user, loading: loading } = useRequest(async () => {
    const res = await getUser();
    if (res) {
      return res;
    }
    return {};
  });

  return {
    user,
    loading,
  };
};
```

### 使用 Model

现在，您想要在某个组件中使用全局的 Model。以用户信息为例，只需要调用 `useModel` 这一钩子函数：

```tsx
// src/components/Username/index.tsx
import { useModel } from '@umijs/max';

export default function Page() {
  const { user, loading } = useModel('userModel');

  return (
    {loading ? <></>: <div>{user.username}</div>}
  );
}
```

其中，`useModel()` 方法传入的参数为 Model 的**命名空间**。

## 性能优化

`useModel()` 方法可以接受可选的第二个参数，当组件只需要使用 Model 中的部分参数，而对其它参数的变化不感兴趣时，可以传入一个函数进行过滤。以实现计数器的操作按钮为例：

```tsx
// src/components/CounterActions/index.tsx
import { useModel } from '@umijs/max';

export default function Page() {
  const { add, minus } = useModel('counterModel', (model) => ({
    add: model.increment,
    minus: model.decrement,
  }));

  return (
    <div>
      <button onClick={add}>add by 1</button>
      <button onClick={minus}>minus by 1</button>
    </div>
  );
};
```

上面的组件并不关心计数器 Model 中的 `counter` 值，只需要使用 Model 提供的 `increment()` 和 `decrement()` 方法。于是我们传入了一个函数作为 `useModel()` 方法的第二个参数，该函数的返回值将作为 `useModel()` 方法的返回值。

这样，我们过滤掉了 `counter` 这一频繁变化的值，避免了组件重复渲染带来的性能损失。

## API

### `useModel`

`useModel()` 是一个钩子函数，提供了使用 Model 的能力。它接受两个参数：

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| `namespace` | `String` | Model 文件的命名空间 |
| `updater` | `(model: any) => any` | 可选参数。传入一个函数，函数的返回值为当前组件中需要使用到的 Model 状态或数据，并作为 `useModel()` 方法的返回值。对优化组件性能具有重要意义。 |

```tsx
// src/components/AdminInfo/index.tsx
import { useModel } from 'umi';

export default function Page() {
  const { user, fetchUser } = useModel('adminModel', (model) => ({
    user: model.admin,
    fetchUser: model.fetchAdmin,
  }));

  return <>hello</>;
};
```

## License

Licensed under the MIT License.