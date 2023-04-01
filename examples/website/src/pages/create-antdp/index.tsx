import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      path={() => import('create-antdp/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp/README.md"
    />
  );
}
