import { loadingData } from '@/services/api';
export default {
  namespace: 'LoadingData',
  state: {
    list: [],
  },
  effects: {
    *getList(_, { call, put, select }) {
      const data = yield call(loadingData);
      if (data.code == 1) {
        yield put({
          type: 'update',
          payload: {
            list: data.data.rows,
          },
        });
      }
    },
  },
  reducers: {
    updata(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
