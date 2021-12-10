import request from '@antdp/request';

export async function userLogin(params) {
  return request('/api/users/login', {
    method: 'POST',
    data: params,
  });
}

// 模拟分页请求
export const selectPage = async (param) => {
  return request('/api/demo/selectPage', {
    method: 'POST',
    data: param,
  });
};
