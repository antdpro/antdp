import { fakeAccessAuth } from '@/services/api';

const getToken = () => sessionStorage.getItem('token');
const getAccess = () => {
  const access = sessionStorage.getItem('access');
  return access ? JSON.parse(access) : '';
};

const getTheme = (type) => {
  const th = localStorage.getItem('theme');
  const bodyEle = document.body;
  if (th) {
    if (bodyEle) {
      bodyEle.className = `theme-${th}`;
    }
    return th;
  }
  localStorage.setItem('theme', type);
  if (bodyEle) {
    bodyEle.className = `theme-${type}`;
  }
  return type;
};

export default {
  namespace: 'global',
  state: {
    collapsed: localStorage.getItem('collapsed') ? JSON.parse(localStorage.getItem('collapsed')) : false,
    isLogin: false,
    theme: getTheme('dark'),
    access: getAccess(),
    token: getToken() || '',
    bodyHeight: null,

  },
  effects:{
    *caslogin(_, { call, put }) {
      // 调用后台auth接口获取权限数据
      const response = yield call(fakeAccessAuth);
      if (response.code === 1) {
        yield sessionStorage.setItem('token', response.data.loginName);
        yield sessionStorage.setItem('access', JSON.stringify(response.data));
      } else {
        yield sessionStorage.removeItem('token');
        yield sessionStorage.removeItem('access');
      }
      yield put({
        type: 'changeLoginLoadingStatus',
        payload: {
          isLogin: false,
        },
      });
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
    },

  },
  reducers:{
    changeLayoutCollapsed(state, { payload }) {
      // 保存菜单搜索状态
      localStorage.setItem('collapsed', payload);
      return {
        ...state,
        collapsed: payload,
      };
    },
    changeTheme(state) {
      const theme = (state.theme === 'light' || !state.theme) ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      const bodyEle = document.body;
      if (bodyEle) {
        bodyEle.className = `theme-${theme}`;
      }
      return { ...state, theme };
    },
    changeLoginLoadingStatus(state, { payload }) {
      return {
        ...state,
        isLogin: payload.loginLoading,
      };
    },
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        code: payload.code,
        type: payload.type,
        token: payload.token,
        submitting: false,
        'access': payload.data,
        message: payload.message,
      };
    },
  }
}