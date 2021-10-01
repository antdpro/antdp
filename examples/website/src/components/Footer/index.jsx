import styles from './index.module.less';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Gitee } from '../../assets/gitee.svg';

const data = [
  {
    title: 'Product',
    childrens: [
      {
        href: 'https://antdpro.gitee.io/antdp',
        title: 'antdp 国内镜像站点 🇨🇳',
      },
      {
        href: 'https://github.com/antdpro/create-antdp',
        title: 'create-antdp 快速创建一个项目',
      },
      {
        href: 'https://github.com/uiwjs',
        title: '@uiwjs 一些 React 相关组件',
      },
      {
        href: 'https://github.com/jaywcjlove/tsbb',
        title: 'TSBB 创建一个组件？',
      },
    ],
  },
  {
    title: '相关资源',
    childrens: [
      {
        href: 'https://umijs.org/',
        title: 'UmiJS - React 应用开发框架',
      },
      {
        href: 'https://github.com/websemantics/awesome-ant-design',
        title: 'Awesome Ant Design',
      },
      {
        href: 'https://github.com/alibaba/hooks',
        title: 'ahooks-React Hooks 库',
      },
    ],
  },
  {
    title: '其它资料',
    childrens: [
      {
        href: 'https://github.com/facebook/react',
        title: 'React',
      },
      {
        href: 'https://ant.design/',
        title: 'Ant Design',
      },
      {
        href: 'https://ant-design.gitee.io/',
        title: 'Ant Design 国内镜像站点 🇨🇳',
      },
    ],
  },
  {
    title: '学习资料',
    childrens: [
      {
        href: 'https://www.react.express/',
        title: 'React Express',
      },
      {
        href: 'https://jskatas.org/',
        title: 'JavaScript Katas',
      },
      {
        href: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
      },
      {
        href: 'https://es6.ruanyifeng.com/',
        title: 'ES6 入门教程',
      },
    ],
  },
];

export default function Footer(props) {
  const { placement } = props;
  return (
    <footer className={styles.warpper}>
      <div
        className={styles.inner}
        style={{ ...(placement === 'left' ? { margin: 'inherit' } : {}) }}
      >
        <div className={styles.nav}>
          {data.map((item, idx) => {
            return (
              <nav key={idx}>
                <div>
                  <label>{item.title}</label>
                  <ul>
                    {item.childrens.map((child, _idx) => {
                      return (
                        <li key={_idx}>
                          <a href={child.href} target="__blank">
                            {child.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            );
          })}
        </div>
        <section>
          <div className={styles.icons}>
            <a href="https://github.com/antdpro/antdp" target="__blank">
              <Github />
            </a>
            <a href="https://gitee.com/antdpro/antdp" target="__blank">
              <Gitee />
            </a>
          </div>
          <div className={styles.icons}>
            <a href="https://github.com/antdpro/antdp" target="__blank">
              <img
                src="https://img.shields.io/dub/l/vibe-d.svg"
                alt="License MIT"
              />
            </a>
            <a href="https://www.npmjs.com/package/antdp" target="__blank">
              <img src="https://img.shields.io/npm/v/antdp.svg" alt="npm" />
            </a>
            <a
              href="https://github.com/antdpro/antdp/releases"
              target="__blank"
            >
              <img
                src="https://img.shields.io/github/release/antdpro/antdp.svg"
                alt="Github Release"
              />
            </a>
            <a href="https://github.com/antdpro/antdp/issues" target="__blank">
              <img
                src="https://img.shields.io/github/issues/antdpro/antdp.svg"
                alt="Github Issues"
              />
            </a>
            <a href="https://github.com/antdpro/antdp/network" target="__blank">
              <img
                src="https://img.shields.io/github/forks/antdpro/antdp.svg"
                alt="Github Forks"
              />
            </a>
            <a
              href="https://github.com/antdpro/antdp/stargazers"
              target="__blank"
            >
              <img
                src="https://img.shields.io/github/stars/antdpro/antdp.svg"
                alt="Github Stars"
              />
            </a>
          </div>
          <p>
            Copyright © 2021{' '}
            <a href="https://github.com/antdpro/antdp" target="__blank">
              antdp
            </a>
            . All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
