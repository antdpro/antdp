import str from '@antdp/page-loading/README.md';
import PageLoading from '@antdp/page-loading';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <Markdown
      source={str}
      dependencies={{ PageLoading }}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/page-loading/README.md"
    />
  );
}
