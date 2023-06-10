import { Anchor } from 'antd';
import { useEffect, useState } from 'react';
import remark from 'remark';
import { useComponentMarkdown } from './hooks';

export default function Anchors() {
  const markdownText = useComponentMarkdown();
  const [headers, setHeaders] = useState([]);

  function traverse(node, headers = []) {
    let currentHeader = null;

    if (node.type === 'heading') {
      // 英文转小写，去首尾空白和标点符号，中间空格替换成-
      const text = node.children[0].value;
      const href = text
        ?.toLowerCase()
        .replace(/^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$/g, '')
        .replace(/\s+/g, '-')
        .replace(/\./g, '');

      const level = node.depth;
      currentHeader = { text, href, level, children: [] };

      if (level === 1) {
        headers.push(currentHeader);
      } else {
        const parentHeader = headers[headers.length - 1];
        if (parentHeader) {
          parentHeader.children.push(currentHeader);
        }
      }
    }

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(
          node.children[i],
          currentHeader ? currentHeader.children : headers,
        );
      }
    }

    return headers;
  }

  useEffect(() => {
    const processor = remark();
    const ast = processor.parse(markdownText);
    const headers = traverse(ast);
    setHeaders(headers);
  }, [markdownText]);

  function createItems(headers) {
    return headers.map((header) => {
      const item = {
        key: `${header.text}`,
        href: `${header.href}`,
        title: header.text,
      };

      if (header.children.length > 0) {
        item.children = createItems(header.children);
      }

      return item;
    });
  }

  const items = createItems(headers);

  // ... 使用 items 渲染你的锚点 ...

  return (
    <Anchor
      items={items}
      onClick={(e, link) => {
        e.preventDefault();
        const element = document.getElementById(link.href);
        element?.scrollIntoView({ behavior: 'instant', block: 'start' });
        // console.log('element.offsetTop: ', window.scrollTo, element.offsetTop);
        // if (element) {
        //   window.scrollTo({
        //     top: element.offsetTop - 58,
        //     left: 0,
        //     behavior: 'smooth'
        //   });
        // }
      }}
    />
  );
}
