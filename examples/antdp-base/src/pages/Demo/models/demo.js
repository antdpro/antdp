export default {
  namespace: 'demo',
  state: {
    queryData: {},
    visible: false,
  },
  reducers: {
    update: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  effects: {},
};
