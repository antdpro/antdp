import str from '@antdp/fullscreen/README.md';
import Fullscreen from '@antdp/fullscreen';
import Markdown from '../../components/markdown';

export default function Pages() {
  return <Markdown source={str} dependencies={{ Fullscreen }} />;
}