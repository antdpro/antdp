import str from '@antdp/antdp-ui/lib/QuickForm/README.md';
import Markdown from '../../../components/markdown';

export default function Pages() {
  return (
    <div>
      <Markdown
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/QuickForm/README.md"
      />
    </div>
  );
}
