import MarkdownPreview from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import BackToUp from '@uiw/react-back-to-top';
import { getMetaId, isMeta, getURLParameters, CodeBlockData } from 'markdown-react-code-preview-loader';
import { Root, Element, RootContent } from 'hast';
import CodeLayout from 'react-code-preview-layout';
import { useRef } from 'react';

const Warpper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  .w-rcpl-preview {
    white-space: normal;
  }
`;

const Markdown = styled(MarkdownPreview)`
  padding: 50px 30px 120px 30px;
  max-width: 1024px;
`;

const getBooleanValue = (param: Record<string, string>, field: string, defaultValue: boolean) => {
  if (Reflect.has(param, field)) {
    const newValue = Reflect.get(param, field);
    if (newValue === 'true') {
      return true;
    }
    if (newValue === 'false') {
      return false;
    }
  }
  return defaultValue;
};
interface MarkdownProps extends CodeBlockData {
  editePath: string;
}
const Preview = (props: MarkdownProps) => {
  const { components: MDcomponents, data: MDdata } = props
  const $dom = useRef(null);
  return (
    <Warpper ref={$dom}>
      <Markdown
        disableCopy={true}
        source={props.source}
        rehypeRewrite={(node: Root | RootContent, index: number, parent: Root | Element) => {
          if (node.type === 'element' && parent && parent.type === 'root' && /h(1|2|3|4|5|6)/.test(node.tagName)) {
            const child = node.children && (node.children[0] as Element);
            if (child && child.properties && child.properties.ariaHidden === 'true') {
              child.children = [];
            }
          }
        }}
        components={{
          code: ({ inline, node, ...props }) => {
            const { 'data-meta': meta, ...rest } = props as any;
            if (inline || !isMeta(meta)) {
              return <code {...props} />;
            }
            const line = node.position?.start.line;
            const metaId = getMetaId(meta) || String(line);
            const Child = MDcomponents[`${metaId}`];
            if (metaId && typeof Child === 'function') {
              const code = MDdata[metaId].value || '';
              const param = getURLParameters(meta);
              return (
                <CodeLayout
                  disableCheckered={getBooleanValue(param, 'disableCheckered', true)}
                  disableToolbar={getBooleanValue(param, 'disableToolbar', false)}
                  disableCode={getBooleanValue(param, 'disableCode', false)}
                  disablePreview={getBooleanValue(param, 'disablePreview', false)}
                  bordered={getBooleanValue(param, 'bordered', true)}
                  copied={getBooleanValue(param, 'copied', true)}
                  background={param.background}
                  toolbar={param.title || '示例'}
                  code={<code {...rest} />}
                  text={code}
                >
                  <Child />
                </CodeLayout>
              );
            }
            return <code {...rest} />;
          },
        }}
      />
      <BackToUp element={$dom.current} style={{ float: 'right' }}>
        Top
      </BackToUp>
    </Warpper>
  );
};
export default Preview;
