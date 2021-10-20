import request from '@antdp/request';

export async function userLogin(params) {
  return request('/api/users/login', {
    method: 'POST',
    data: params,
  });
}

// 模拟分页请求
export const selectPage = async (params, formData) => {
  const { current, pageSize } = params;
  return request('/api/demo/selectPage', {
    method: 'POST',
    data: { page: current, pageSize, queryData: { ...formData } },
  });
};
