import str from 'create-antdp/README.md';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <Markdown
      source={str}
      editePath="https://github.com/antdpro/create-antdp/edit/main/README.md"
    />
  );
}
