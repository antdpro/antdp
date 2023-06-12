import { Anchor } from 'antd';
import { useEffect, useState } from 'react';
import remark from 'remark';

export default function Anchors({ markdownText }) {
  const [items, setItems] = useState([]);

  function traverse(node, stack = [{ children: [] }]) {
    let currentHeader = null;

    if (node.type === 'heading') {
      // 英文转小写，去首尾空白和标点符号，中间空格替换成-
      const text = node.children[0].value;
      const href = text
        ?.toLowerCase()
        .replace(/^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$|[\n+/\/@\.]/g, '')
        .replace(/\s+/g, '-');

      const level = node.depth;
      currentHeader = { text, href, level, children: [] };

      let top = stack[stack.length - 1];

      while (stack.length > level) {
        stack.pop();
        top = stack[stack.length - 1];
      }

      if (level > stack.length) {
        if (top.children.length > 0) {
          stack.push(top.children[top.children.length - 1]);
        }
      }

      top.children.push(currentHeader);
    }

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i], stack);
      }
    }

    return stack[0].children;
  }

  useEffect(() => {
    const processor = remark();
    const ast = processor.parse(markdownText);
    const headers = traverse(ast);
    const items = createItems(headers);
    setItems(items);
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

  return (
    <Anchor
      items={items}
      onClick={(e, link) => {
        console.log('link: ', link);
        e.preventDefault();
        const element = document.getElementById(link.href);
        element?.scrollIntoView({ behavior: 'instant', block: 'start' });
      }}
    />
  );
}
