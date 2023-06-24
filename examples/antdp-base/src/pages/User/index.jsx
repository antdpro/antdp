import { useParams } from '@umijs/max';

export default () => {
  const params = useParams();
  console.log('params', params);
  return 'user';
};
