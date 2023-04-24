# 样式
本文介绍各种在 antdp 项目中使用样式的方式。

## 使用 CSS 样式
你可以在 Umi 项目中使用 `.css` 文件声明各种样式，然后在 `.ts` 文件中引入即可生效。

例如，在 `src/pages/index.css` 文件按照以下代码声明 `.title` 类的样式为红色：

```css
.title {
  color: red;
}
```

然后在 `src/pages/index.tsx` 文件中引入即可生效。

```tsx
// src/pages/index.tsx
 
import './index.css';
 
export default function () {
  return <div className="title">Hello World</div>;
}
```
按照此种引入方式的样式会在整个 Umi 项目中生效，即无论你从哪个 `.ts` 文件引入，他声明的样式可以在任何页面和组件中使用。如果你想要避免这种情况，可以使用 `CSS Modules` 的功能来限制样式的作用域。

## 使用 CSS Modules
在 `ts` 文件中引入样式时，如果赋予他一个变量名，就可以将样式以 CSS Module 的形式引入。

```tsx
// src/pages/index.tsx
 
import styles from './index.css';
 
export default function () {
  return <div className={styles.title}>
    Hello World
  </div>;
}
```
上面的示例中，`index.css` 文件中声明的样式不会对全局样式造成影响，只会对从 `styles` 变量中使用的样式生效。

## 使用 CSS 预处理器
Umi 默认支持 LESS (推荐)，你可以直接按照引入 CSS 文件的方式引入并使用这些由 CSS 预处理器处理的样式。

```tsx
// src/pages/index.tsx
 
import './index.less';
 
export default function () {
  return <div className="title">Hello World</div>;
}
```
同样也支持 CSS Module 的用法：
```tsx
// src/pages/index.tsx
 
import lessStyles from './index.less';
 
export default function () {
  return <div className={lessStyles.title}>
    Hello World
    <p className={sassStyles.blue}>I am blue</p>
    <p className={scssStyles.red}>I am red</p>
  </div>;
}
```


## License

Licensed under the MIT License.