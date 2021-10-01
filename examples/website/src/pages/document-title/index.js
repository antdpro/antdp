import str from '@antdp/document-title/README.md';
import DocumentTitle from '@antdp/document-title';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <Markdown
      source={str}
      dependencies={{ DocumentTitle }}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/document-title/README.md"
    />
  );
}
