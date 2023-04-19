import request from '@antdp/request';

// 模拟分页请求
export const selectPage = async (params) => {
  return request('/api/demo/selectPage', {
    method: 'POST',
    data: params,
  });
};

export async function userLogin(params) {
  return request('/api/users/login', {
    method: 'POST',
    data: params,
  });
}
