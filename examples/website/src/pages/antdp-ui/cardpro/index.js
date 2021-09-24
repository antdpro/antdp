import str from '@antdp/antdp-ui/lib/CardPro/README.md';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Pages() {
  return (
    <div>
      <MarkdownPreview source={str} />
    </div>
  );
}
