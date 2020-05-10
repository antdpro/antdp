import { userLogin } from '@/services/api';

const getToken = () => sessionStorage.getItem('token');

export default {
  namespace: 'global',
  state: {
    isLogin: false,
    token: getToken() || '',
    bodyHeight: null,
  },
  effects: {
    // 登录
    *login({ payload }, { put }) {
      const data = yield call(userLogin, { ...payload });
      console.log('data:', data);
    },
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
