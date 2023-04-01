import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      path={() => import('@antdp/user-login/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/user-login/README.md"
    />
  );
}
