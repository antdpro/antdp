import { request } from 'umi';

export async function userLogin(params) {
  return request('/api/users/login', {
    method: 'POST',
    data: params,
  });
}

export async function fakeAccountLogout() {
  return request(`api/access/logout`, {
    method: 'POST',
  });
}

export async function fakeAccessAuth() {
  return request('api/access/auth', {
    method: 'POST',
  });
}

export async function fakeAccessGrant() {
  return request('api/access/grant', {
    method: 'POST',
  });
}

export const loadingData = async () => {
  return request('/api/loading/data', {
    method: 'POST',
  });
};
