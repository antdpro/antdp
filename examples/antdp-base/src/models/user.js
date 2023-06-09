const getToken = () => sessionStorage.getItem('token');
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
