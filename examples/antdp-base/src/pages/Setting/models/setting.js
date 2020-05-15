export default {
  namespace: 'Setting',
  state: {
    personalOwnerCheck: [],
    unlabeledEnterpriseOwnerCheck: [],
    ownerEarlyWarning: false,
    ownerEarlyWarningMoney: null,
  },
  effects: {
    *submit(_, { call, put, select }) {
      let params = yield select(({ ParameterSetting }) => ({
        ...ParameterSetting,
      }));
      console.log(params);
    },
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
