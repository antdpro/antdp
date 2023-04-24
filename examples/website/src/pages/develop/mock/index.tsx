import Markdown from '../../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      path={() => import('./README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/examples/website/src/pages/develop/mock/README.md"
    />
  );
}
