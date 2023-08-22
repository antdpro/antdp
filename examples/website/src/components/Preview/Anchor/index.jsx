import { Anchor } from 'antd';
import { useEffect, useState } from 'react';

const convertMarkdownToItems = (markdown) => {
  const items = [];
  let stack = []; // 使用堆栈来处理嵌套项
  const lines = markdown.split('\n');
  let count = 0; // 添加计数器以避免重复的key
  for (const line of lines) {
    const headingMatch = line.match(/^(#+)\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const item = {
        key: text
          ?.toLowerCase()
          .replace(/^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$|[\n+/\/@\.]/g, '')
          .replace(/\s+/g, '-'),
        href: text
          ?.toLowerCase()
          .replace(/^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$|[\n+/\/@\.]/g, '')
          .replace(/\s+/g, '-'),
        title: text,
        children: [],
      };

      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length > 0) {
        stack[stack.length - 1].children.push(item);
      } else {
        items.push(item);
      }

      stack.push({ level, children: item.children });
    }
  }
  return items;
};

export default function Anchors({ markdownText }) {
  const [items, setItems] = useState([]);
  const [activeAnchor, setActiveAnchor] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2');
      let currentAnchor = '';
      for (const heading of headings) {
        const { top } = heading.getBoundingClientRect();
        if (top <= 0) {
          currentAnchor = heading.id;
        }
      }

      setActiveAnchor(currentAnchor);
    };
    document.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  useEffect(() => {
    if (markdownText) {
      const items = convertMarkdownToItems(markdownText);
      setItems(items);
    }
  }, [markdownText]);
  return (
    <Anchor
      items={items}
      getCurrentAnchor={() => activeAnchor}
      onClick={(e, link) => {
        e.preventDefault();
        const element = document.getElementById(link.href);
        element?.scrollIntoView({ behavior: 'instant', block: 'start' });
      }}
    />
  );
}
