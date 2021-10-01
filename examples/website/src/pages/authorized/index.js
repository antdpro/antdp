import str from '@antdp/authorized/README.md';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <div>
      <Markdown
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/authorized/README.md"
      />
    </div>
  );
}
