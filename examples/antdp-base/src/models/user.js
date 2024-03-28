const getToken = () => {
  const store = ANTD_IS_STORAGE ? sessionStorage : localStorage;
  return store.getItem('token');
};
export default {
  namespace: 'user',
  state: {
    token: getToken(),
  },
  reducers: {
    update: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  effects: {},
};
