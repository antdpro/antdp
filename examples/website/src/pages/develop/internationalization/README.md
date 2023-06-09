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

在 `layouts` 中添加`SelectLang` 和 `useIntl`：
```diff
import BasicLayouts from '@antdp/basic-layouts';
+ import { SelectLang, useIntl } from '@umijs/max';

const Layout = (props) => {
  return (
    <BasicLayouts
      ...
      projectName="Ant Design"
+      topRightLanguage={<SelectLang />}
+      intlLanguage={useIntl()}
      ...
    />
  );
};

export default Layout;

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

## 常用接口介绍

### `addLocale` 动态添加多语言支持

无需创建并编写单独的多语言文件，使用 `addLocale()` 接口可以在运行时动态添加语言支持。它接受三个参数：

| 参数      | 类型     | 介绍                          |
| --------- | -------- | ----------------------------- |
| `name`    | `String` | 多语言的 Key                  |
| `message` | `Object` | 多语言的内容对象              |
| `options` | `Object` | `momentLocale` 和 `antd` 配置 |

例如，您想要动态引入繁体中文的多语言支持，可以编写代码如下：

```ts
import { addLocale } from '@umijs/max';
import zhTW from 'antd/es/locale/zh_TW';

addLocale(
  'zh-TW',
  {
    welcome: '歡迎光臨 Umi 的世界！',
  },
  {
    momentLocale: 'zh-tw',
    antd: zhTW,
  },
);
```

### `getAllLocales` 获取多语言列表

通过 `getAllLocales()` 接口可以获取当前所有多语言选项的数组，包括通过 `addLocale()` 方法添加的多语言选项。该接口默认会在 `src/locales` 目录下寻找形如 `zh-CN.(js|json|ts)` 的文件，并返回多语言的 Key。

```ts
import { getAllLocales } from '@umijs/max';

getAllLocales();
// [en-US, zh-CN, ...]
```

### `getLocale` 获取当前选择的语言

通过 `getLocale()` 接口可以获取当前选择的语言：

```ts
import { getLocale } from '@umijs/max';

getLocale();
// zh-CN
```

### `useIntl` 获取 `intl` 对象

`useIntl()` 很有可能会是您开发中最常用的接口，通过它可以获取 `intl` 对象，并进一步执行 `formatMessage()` 等方法来实现您多元的需求：

```json
// src/locales/en-US.json
{
  "welcome": "Hi, {name}."
}
```

```ts
import { useIntl } from '@umijs/max';

const intl = useIntl();
const msg = intl.formatMessage(
  {
    id: 'welcome',
  },
  {
    name: 'Jackson',
  },
);
console.log(msg);
// Hi, Jackson.
```

关于 `intl` 对象的更多用法，请参阅 `react-intl` 的[接口文档](https://github.com/formatjs/formatjs/blob/main/website/docs/react-intl/api.md)。

### `setLocale` 设置语言

通过 `setLocale()` 接口可以使用编程的方法动态设置当前的语言。它有两个参数：

| 参数         | 类型      | 介绍                                       |
| ------------ | --------- | ------------------------------------------ |
| `lang`       | `String`  | 切换到的语言                               |
| `realReload` | `Boolean` | 切换时是否刷新页面，默认为 `true` 刷新页面 |

```ts
import { setLocale } from '@umijs/max';

// 切换时刷新页面
setLocale('en-US');

// 切换时不刷新页面
setLocale('en-US', false);
```

## 配置插件

您可以在 `config.ts` 中配置国际化插件。默认值如下：

```ts
export default {
  locale: {
    antd: false, // 如果项目依赖中包含 `antd`，则默认为 true
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-CN',
    title: false,
    useLocalStorage: true,
  },
};
```

配置的详细介绍如下：

| 配置项 | 类型 | 默认值 | 介绍 |
| --- | --- | --- | --- |
| `antd` | `Boolean` | `false`；如果项目包含 `antd` 依赖，则为 `true` | `antd` 的国际化支持。更多介绍可参见[此文档](https://ant.design/docs/react/i18n-cn)。 |
| `baseNavigator` | `Boolean` | `true` | 开启**浏览器语言检测**。默认情况下，当前语言环境的识别按照：`localStorage` 中 `umi_locale` 值 > 浏览器检测 > `default` 设置的默认语言 > `zh-CN` |
| `baseSeparator` | `String` | `-` | 语言（Language）与国家（Country） 之间的**分割符**。默认情况下为 `-`，返回的语言及目录文件为 `zh-CN`、`en-US` 和 `sk` 等。若指定为 `_`，则 `default` 默认为 `zh_CN`。 |
| `default` | `String` | `zh-CN` | 项目**默认语言**。当检测不到具体语言时，使用 `default` 设置的默认语言。 |
| `title` | `Boolean` | `false` | 开启[**标题国际化**](#标题国际化)。 |
| `useLocalStorage` | `Boolean` | `true` | 自动使用 `localStorage` 保存当前使用的语言。 |

### 标题国际化

在路由配置中添加 `title` 项即可启用国际化支持，自动将页面的标题转为对应的多语言内容。

例如，编写多语言文件如下：

```ts
// src/locales/zh-CN.ts
export default {
  'site.title': 'Umi - 企业级 React 应用开发框架',
  'about.title': 'Umi - 关于我',
};
```

```ts
// src/locales/en-US.ts
export default {
  'site.title': 'Umi - Enterprise-level React Application Framework',
  'about.title': 'Umi - About me',
};
```

配置路由内容如下：

```json
// route.json
  [
    {
      "path": "/login",
      "component": "@/layouts/UserLayout"
    },
     {
      "path": "/",
      "component": "@/layouts/BasicLayout",
      "routes": [
        {
          "path": "/",
          "redirectTo": "/welcome"
        },
        {
          "path": "/welcome",
          "name": "首页",
          "icon": "welcome",
          "locale": "welcome",
          "component": "@/pages/Index/index"
      },
      ]
    }
 ],
```
## 运行时拓展

国际化插件允许您在运行时对它进行一些拓展与定制。

### 自定义 `getLocale`

您可以自定义获取页面语言 `getLocale()` 方法的逻辑，例如通过识别链接 `?locale=en-US`，将 `en-US` 作为当前页面的语言：

```ts
// src/app.ts
import qs from 'qs';

export const locale = {
  getLocale() {
    const { search } = window.location;
    const { locale = 'zh-CN' } = qs.parse(search, { ignoreQueryPrefix: true });
    return locale;
  },
};
```
## FAQ

### 为什么不直接使用 `formatMessage` 这个语法糖？

虽然 `formatMessage` 直接使用起来会非常方便，但是它脱离了 React 的生命周期，最严重的问题就是切换语言时无法触发 DOM 的重新渲染。为了解决这个问题，我们切换语言时就需要刷新一下浏览器，用户体验很差。所以推荐大家使用 `useIntl` 或者 `injectIntl`，可以实现同样的功能。


## License

Licensed under the MIT License.