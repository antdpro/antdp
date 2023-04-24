# 国际化

`@umi/max` 内置了[国际化插件](https://github.com/umijs/umi/blob/master/packages/plugins/src/locale.ts)，它可以轻松地将国际化功能集成到你的 Umi 应用程序之中。

## 开始使用

国际化插件采用约定式目录结构，我们约定在 `src/locales` 目录下引入多语言文件。

多语言文件的命名需遵循此规范：`<lang><separator><COUNTRY>.(js|json|ts)`。其中，`<separator>` 为分隔符，默认为 `-`，可以通过 `baseSeparator` 项配置。

例如，如果您需要在项目中引入简体中文和英文的多语言支持，可以在 `src/locales` 目录下创建 `zh-CN.ts` 和 `en-US.ts` 两个文件：

```diff
src
  + locales
    + zh-CN.ts
    + en-US.ts
  pages
```

在 `config.ts` 中配置国际化插件：

```bash
locale: {
  // 默认使用 src/locales/zh-CN.ts 作为多语言文件
  default: 'zh-CN',
  baseSeparator: '-',
}
```

现在，添加您的第一条多语言内容：

```ts
// src/locales/zh-CN.ts
export default {
  welcome: '欢迎光临 Umi 的世界！',
};
```

```ts
// src/locales/en-US.ts
export default {
  welcome: "Welcome to Umi's world!",
};
```

您也可以使用 `.json` 文件来存放多语言的内容：

```json
// src/locales/zh-CN.json
{
  "welcome": "欢迎光临 Umi 的世界！",
}

// src/locales/en-US.json
{
  "welcome": "Welcome to Umi's world!",
}
```

一切就绪，现在您可以在 Umi 中使用多语言内容。交给我们的 `<FormattedMessage />` 组件吧，只需要将前面的 `welcome` 作为参数 `id` 的值传入即可：

```tsx
import { FormattedMessage } from 'umijs/max';

export default function Page() {
  return (
    <div>
      <FormattedMessage id="welcome" />
    </div>
  );
};
```

渲染的结果如下：

```html
<!-- zh-CN -->
<div>欢迎光临 Umi 的世界！</div>

<!-- en-US -->
<div>Welcome to Umi's world!</div>
```

## 在组件的参数中使用

在某些情况下，您需要将多语言内容作为参数传递给某个组件。可以通过 `intl` 对象来实现：

```tsx
import { Alert } from 'antd';
import { useIntl } from 'umi';

export default function Page() {
  const intl = useIntl();
  const msg = intl.formatMessage({
    id: 'welcome',
  });

  return <Alert message={msg} type="success" />;
};
```

在底层，国际化插件基于 [`react-intl`](https://github.com/formatjs/formatjs/tree/main/packages/react-intl) 封装，并支持它的所有接口，详情可见[此文档](https://github.com/formatjs/formatjs/blob/main/website/docs/react-intl/api.md)。

在上面的代码中，我们就运用到了 `react-intl` 提供的 `useIntl()` 接口来初始化 `intl` 对象，并调用此对象的 [`formatMessage()`](https://github.com/formatjs/formatjs/blob/main/website/docs/react-intl/api.md#formatmessage) 方法来格式化字符串。

## 格式化字符串

您可能想要在多语言翻译中动态插值，那么可以像这样编写多语言内容：

```ts
// src/locales/zh-CN.ts
export default {
  user: {
    welcome: '{name}，今天也是美好的一天！',
  },
};
```

```ts
// src/locales/en-US.ts
export default {
  user: {
    welcome: '{name}, what a nice day!',
  },
};
```

在上面，我们编写了特殊的语法 `{name}`，这允许我们在运行时动态赋值：

```tsx
import { FormattedMessage } from 'umi';

export default function Page() {
  return (
    <p>
      <FormattedMessage id="user.welcome" values={{ name: '张三' }} />
    </p>
  );
};
```

如果您希望通过 `intl` 对象来实现，那么可以这样对它赋值：

```tsx
import { useIntl } from '@umijs/max';

export default function Page() {
  const intl = useIntl();
  const msg = intl.formatMessage(
    {
      id: 'user.welcome',
    },
    {
      name: '张三',
    },
  );

  return <p>{msg}</p>;
};
```

注意，用于赋值的键值对对象应当作为 `formatMessage()` 方法的第二个参数传递。

渲染的结果如下：

```html
<!-- zh-CN -->
<p>张三，今天也是美好的一天！</p>

<!-- en-US -->
<p>张三, what a nice day!</p>
```

## 在组件的参数中使用

在某些情况下，您需要将多语言内容作为参数传递给某个组件。可以通过 `intl` 对象来实现：

```tsx
import { Alert } from 'antd';
import { useIntl } from '@umijs/max';

export default function Page() {
  const intl = useIntl();
  const msg = intl.formatMessage({
    id: 'welcome',
  });

  return <Alert message={msg} type="success" />;
};
```

在底层，国际化插件基于 [`react-intl`](https://github.com/formatjs/formatjs/tree/main/packages/react-intl) 封装，并支持它的所有接口，详情可见[此文档](https://github.com/formatjs/formatjs/blob/main/website/docs/react-intl/api.md)。

在上面的代码中，我们就运用到了 `react-intl` 提供的 `useIntl()` 接口来初始化 `intl` 对象，并调用此对象的 [`formatMessage()`](https://github.com/formatjs/formatjs/blob/main/website/docs/react-intl/api.md#formatmessage) 方法来格式化字符串。

## 格式化字符串

您可能想要在多语言翻译中动态插值，那么可以像这样编写多语言内容：

```ts
// src/locales/zh-CN.ts
export default {
  user: {
    welcome: '{name}，今天也是美好的一天！',
  },
};
```

```ts
// src/locales/en-US.ts
export default {
  user: {
    welcome: '{name}, what a nice day!',
  },
};
```

在上面，我们编写了特殊的语法 `{name}`，这允许我们在运行时动态赋值：

```tsx
import { FormattedMessage } from '@umijs/max';

export default function Page() {
  return (
    <p>
      <FormattedMessage id="user.welcome" values={{ name: '张三' }} />
    </p>
  );
};
```

如果您希望通过 `intl` 对象来实现，那么可以这样对它赋值：

```tsx
import { useIntl } from '@umijs/max';

export default function Page() {
  const intl = useIntl();
  const msg = intl.formatMessage(
    {
      id: 'user.welcome',
    },
    {
      name: '张三',
    },
  );

  return <p>{msg}</p>;
};
```

注意，用于赋值的键值对对象应当作为 `formatMessage()` 方法的第二个参数传递。

渲染的结果如下：

```html
<!-- zh-CN -->
<p>张三，今天也是美好的一天！</p>

<!-- en-US -->
<p>张三, what a nice day!</p>
```

## License

Licensed under the MIT License.