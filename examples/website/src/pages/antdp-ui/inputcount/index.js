import str from '@antdp/antdp-ui/lib/InputCount/README.md';
import Markdown from '../../../components/markdown';
import { InputCount } from '@antdp/antdp-ui';
export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ InputCount }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/InputCount/README.md"
      />
    </div>
  );
}
