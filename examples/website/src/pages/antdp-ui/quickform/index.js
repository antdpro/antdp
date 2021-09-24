import str from '@antdp/antdp-ui/lib/QuickForm/README.md';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Pages() {
  return (
    <div>
      <MarkdownPreview source={str} />
    </div>
  );
}
