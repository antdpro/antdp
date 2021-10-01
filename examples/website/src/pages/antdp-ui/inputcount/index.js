import str from '@antdp/antdp-ui/lib/InputCount/README.md';
import Markdown from '../../../components/markdown';

export default function Pages() {
  return (
    <div>
      <Markdown
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/InputCount/README.md"
      />
    </div>
  );
}
