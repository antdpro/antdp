import str from '@antdp/basic-layouts/README.md';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <Markdown
      source={str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/basic-layouts/README.md"
    />
  );
}
