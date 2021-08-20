import str from '@antdp/authorized/README.md';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Pages() {
  return (
    <div>
      <MarkdownPreview source={str} />
    </div>
  );
}
