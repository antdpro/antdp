import { userLogin } from '@/services/api';
import { message } from 'antd';
import { history } from 'umi';

const getToken = () => sessionStorage.getItem('token');

export default {
  namespace: 'global',
  state: {
    isLogin: false,
    token: getToken() || '',
  },
  effects: {
    // 登录
    *login({ payload: { password, phone } }, { call, put }) {
      const data = yield call(userLogin, { password, phone });
      if (data.code === 1) {
        yield sessionStorage.setItem('token', data.token);
        yield put({ type: 'update', payload: { token: data.token } });
        history.push('/');
      } else if (data && data.message) {
        message.error(data.message);
      }
    },
    // 退出登录
    *logout(_, { call, put }) {
      yield sessionStorage.removeItem('token');
      yield put({ type: 'update', payload: { token: '' } });
      history.push('/login');
    },
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
