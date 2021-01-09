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
        const li = [
          {  menuUrl:"/",id:1,  },
          {  menuUrl:"/welcome",id:2, },
          { menuUrl:"/dashboard",id:3,  },
          { menuUrl:"/dashboard/workplace",id:4,  },
          { menuUrl:"/dashboard/analysis",id:5,  },
          { menuUrl:"/dashboard/monitor",id:6,  },
          { menuUrl:"/dashboard/notfund",id:7,  },
          { menuUrl:"/404",id:99, },
          { menuUrl:"/403",id:100,  },
        ]
        yield sessionStorage.setItem('authMenu',JSON.stringify(li) );
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
