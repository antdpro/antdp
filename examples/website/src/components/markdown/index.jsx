import { Fragment } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import rehypeRewrite from 'rehype-rewrite';
import { Component } from 'react';
import BackToUp from '@uiw/react-back-to-top';
import Code from './Code';
import styles from './index.module.css';
import Footer from '../Footer';

const getCodeStr = (data = [], code = '') => {
  data.forEach((node) => {
    if (node.type === 'text') {
      code += node.value;
    } else if (node.children && Array.isArray(node.children)) {
      code += getCodeStr(node.children);
    }
  });
  return code;
};

export default class Markdown extends Component {
  render() {
    const { editePath } = this.props;
    return (
      <Fragment>
        <MarkdownPreview
          style={{ padding: '20px 26px 40px 26px' }}
          source={this.props.source}
          wrapperElement={{
            'data-color-mode': 'light',
          }}
          rehypePlugins={[
            [
              rehypeRewrite,
              {
                rewrite: (node) => {
                  if (
                    node.type === 'element' &&
                    node.tagName === 'pre' &&
                    node.properties['data-type'] === 'rehyp'
                  ) {
                    node.properties['className'].push(styles.rehyp);
                  }
                },
              },
            ],
          ]}
          components={{
            /**
             * bgWhite 设置代码预览背景白色，否则为格子背景。
             * noCode 不显示代码编辑器。
             * noPreview 不显示代码预览效果。
             * noScroll 预览区域不显示滚动条。
             * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
             */
            code: ({ inline, node, ...props }) => {
              const {
                noPreview,
                noScroll,
                bgWhite,
                noCode,
                codePen,
                codeSandbox,
              } = props;
              if (inline) {
                return <code {...props} />;
              }
              const config = {
                noPreview,
                noScroll,
                bgWhite,
                noCode,
                codePen,
                codeSandbox,
              };
              if (
                Object.keys(config).filter((name) => config[name] !== undefined)
                  .length === 0
              ) {
                return <code {...props} />;
              }
              return (
                <Code
                  code={getCodeStr(node.children)}
                  dependencies={this.props.dependencies}
                  {...{
                    noPreview,
                    noScroll,
                    bgWhite,
                    noCode,
                    codePen,
                    codeSandbox,
                  }}
                />
              );
            },
          }}
        />
        {editePath && (
          <div className={styles.footer}>
            <a href={editePath}>编辑当前页面内容</a>
          </div>
        )}
        <Footer placement="left" />
        <BackToUp>Top</BackToUp>
      </Fragment>
    );
  }
}
