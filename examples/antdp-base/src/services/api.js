import request from '@ane/request';

export async function fakeAccountLogin(params) {
  return request('api/access/login', {
    method: 'POST',
    body: params,
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
