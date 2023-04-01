import MarkdownPreview from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import BackToUp from '@uiw/react-back-to-top';
import { getMetaId, isMeta, getURLParameters, } from 'markdown-react-code-preview-loader';
import { Root, Element, RootContent } from 'hast';
import CodeLayout from 'react-code-preview-layout';
import { useRef, } from 'react';
import Footer from "../Footer"
import { useMdData, MdDataHandle } from "./useMdData"
import { Skeleton } from "antd"
const Warpper = styled.div`
  width:100%;
  height: 100%;
  overflow: auto;
  background-color: var(--color-canvas-default);
  .w-rcpl-preview {
    white-space: normal;
  }
  .ant-table table{
    display: table !important;
    width: 100%;
  }
  .w-rcpl-code{
    padding:0px;
  }
`;

const BaseContent = styled.div`
  width: 1024px;
  margin:0 auto;
`

const Markdown = styled(MarkdownPreview)`
  /* padding: 0px 30px 120px 30px; */
  max-width: 1024px;
`;


const EditText = styled.div`
  padding: 30px;
`

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
interface MarkdownProps {
  editePath: string;
  path: MdDataHandle
}
const Preview = (props: MarkdownProps) => {
  const $dom = useRef(null);
  const { mdData, loading } = useMdData(props.path);
  const { components: MDcomponents, data: MDdata, source } = mdData || {}


  return (
    <Warpper ref={$dom}>
      <Skeleton loading={!!loading} >
        <BaseContent>
          <Markdown
            disableCopy={true}
            source={source}
            rehypeRewrite={(node: Root | RootContent, index: number, parent: Root | Element) => {
              if (node.type === 'element' && parent && parent.type === 'root' && /h(1|2|3|4|5|6)/.test(node.tagName)) {
                const child = node.children && (node.children[0] as Element);
                if (child && child.properties && child.properties.ariaHidden === 'true') {
                  child.children = [];
                }
              }
              if (node.type === 'element' && node.tagName === 'pre' && node.children[0].data?.meta) {
                const meta = node.children[0].data?.meta as string;
                if (isMeta(meta)) {
                  node.tagName = 'div';
                  if (!node.properties) {
                    node.properties = {};
                  }
                  node.properties!['data-md'] = meta;
                  node.properties!['data-meta'] = 'preview';
                }
              }
            }}
            components={{
              div: ({ node, ...props }) => {
                const { 'data-meta': meta, 'data-md': metaData, ...rest } = props as any;
                if (meta === 'preview') {
                  const line = node.position?.start.line;
                  const metaId = getMetaId(meta) || String(line);
                  const Child = MDcomponents[metaId];
                  if (metaId && typeof Child === 'function') {
                    const code = MDdata[metaId].value || '';
                    const param = getURLParameters(metaData);
                    return (
                      <CodeLayout
                        disableCheckered={getBooleanValue(param, 'disableCheckered', true)}
                        bordered={getBooleanValue(param, 'bordered', true)}
                      >
                        <CodeLayout.Preview><Child /></CodeLayout.Preview>
                        <CodeLayout.Toolbar text={code} >{param.title || '示例'}</CodeLayout.Toolbar>
                        <CodeLayout.Code ><pre {...rest} /></CodeLayout.Code>
                      </CodeLayout>
                    );
                  }
                }
                return <div {...props} />;
              },
            }}
          />
          {props.editePath && (
            <EditText>
              <a href={props.editePath}>编辑当前页面内容</a>
            </EditText>
          )}
          <Footer />
        </BaseContent>
        <BackToUp element={$dom.current} style={{ float: 'right' }}>
          Top
        </BackToUp>
      </Skeleton>
    </Warpper>
  );
};
export default Preview;
