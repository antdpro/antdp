import { useRef } from 'react';
import { Root, Element, RootContent } from 'hast';
import styled from 'styled-components';
import MarkdownPreview, {
  MarkdownPreviewProps,
  MarkdownPreviewRef,
} from '@uiw/react-markdown-preview';
import {
  getMetaId,
  isMeta,
  getURLParameters,
} from 'markdown-react-code-preview-loader';
import CodeLayout from 'react-code-preview-layout';
import { useMdData, MdDataHandle } from './useMdData';
import { getTocTree } from './nodes/toc';
import Loading from '../Loading';
import BackToUp from '@uiw/react-back-to-top';
import Footer from "../Footer"
import './nodes/toc.less';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BaseContent = styled.div`
  width: 1024px;
  margin:0 auto;
`

const EditText = styled.div`
  padding: 30px;
`

const Markdown = styled<
  React.ForwardRefExoticComponent<
    MarkdownPreviewProps & {
      loading?: string;
    } & React.RefAttributes<MarkdownPreviewRef>
  >
>(MarkdownPreview)`
  padding: 20px 30px 120px 30px;
  max-width: 1336px;
  &::after,
  &::before {
    content: none;
  }
`;
// display: grid;
// grid-template-columns: minmax(0, 3.5fr) 240px;
// grid-template-areas: 'main toc';

const PreviewDocument = ({ path, editePath }: { path: MdDataHandle, editePath: string; }) => {
  const $dom = useRef<HTMLDivElement>(null);
  const { mdData, loading } = useMdData(path);
  return (
    <Wrapper ref={$dom}>
      <Loading loading={loading}>
        <BaseContent>
          <Markdown
            disableCopy={true}
            source={mdData.source}
            rehypeRewrite={(
              node: Root | RootContent,
              index: number,
              parent: Root | Element,
            ) => {
              if (node.type === 'element' && parent && parent.type === 'root') {
                const menu = parent.children[1] as Element | undefined;
                let childLength = [...parent.children].filter(
                  (item) => item.type !== 'raw',
                ).length;
                const lastChild = parent.children[parent.children.length - 1];
                if (lastChild?.type === 'raw') {
                  childLength = parent.children.length - 2;
                }
                if (
                  (index + 1 === childLength ||
                    index - 1 === childLength ||
                    index === childLength) &&
                  menu?.properties?.class !== 'menu-toc'
                ) {
                  const tocData = getTocTree([...parent.children]);
                  const child = [...parent.children].map((item) => {
                    if (item.type === 'element' && item.tagName === 'pre') {
                      const meta = item.children[0]?.data?.meta as string;
                      if (isMeta(meta)) {
                        item.tagName = 'div';
                        item.properties = {
                          ...item.properties,
                          'data-md': meta,
                          'data-meta': 'preview',
                        };
                        return { ...item };
                      }
                    }
                    return item;
                  });
                  parent.children = [
                    {
                      type: 'element',
                      tagName: 'div',
                      children: child as Element[],
                    },
                    // tocData,
                  ];
                }
              }
            }}
            components={{
              div: ({ node, ...props }) => {
                const {
                  'data-meta': meta,
                  'data-md': metaData,
                  ...rest
                } = props as any;
                const line = node.position?.start.line;
                const metaId = getMetaId(metaData) || String(line);
                const Child = mdData.components[metaId];
                if (meta !== 'preview' || !metaId || typeof Child !== 'function')
                  return <div {...props} />;
                const code = mdData.data[metaId].value || '';
                const param = getURLParameters(meta);
                return (
                  <CodeLayout disableCheckered style={{ marginBottom: 18 }}>
                    <Preview>
                      <Child />
                    </Preview>
                    <Toolbar text={code}>{param.title || '示例'}</Toolbar>
                    <Code style={{ padding: 0 }}>
                      <pre {...rest} />
                    </Code>
                  </CodeLayout>
                );
              },
            }}
          />
        </BaseContent>
        {editePath && (
          <EditText>
            <a href={editePath}>编辑当前页面内容</a>
          </EditText>
        )}
        <Footer />
      </Loading>
      <BackToUp element={$dom.current} style={{ float: 'right' }}>
        Top
      </BackToUp>
    </Wrapper>
  );
};
export default PreviewDocument;
