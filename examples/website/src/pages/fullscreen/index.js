import str from '@antdp/fullscreen/README.md';
import Fullscreen from '@antdp/fullscreen';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <Markdown
      source={str}
      dependencies={{ Fullscreen }}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/fullscreen/README.md"
    />
  );
}
