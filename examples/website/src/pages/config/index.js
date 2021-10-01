import str from '@antdp/config/README.md';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <Markdown
      source={str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/config/README.md"
    />
  );
}
