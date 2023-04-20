// @ts-ignore
import { UseQueryOptions, QueryKey } from '@umijs/max';
import { ReactQueryOptions, QueryFnOptions } from './type'

function getFetchOption(type: ReactQueryOptions['contentType'] = 'json', option: RequestInit = {}) {
  if (type === 'json') {
    option.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...option.headers,
    };
  } else if (type === 'form') {
    option.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      ...option.headers,
    };
  }
  option.headers = new Headers({ ...option.headers || {} });
  const token = sessionStorage.getItem("token");
  if (token && !option.headers.get('Authorization')) {
    option.headers.set('Authorization', `Bearer ${token}`);
  }
  return { ...option };
}

/**
 * Fetch API 请求
 * ## 返回状态
 *
 * 200: '服务器成功返回请求的数据'
 * 201: '新建或修改数据成功'
 * 400: '发出的请求错误'
 * 401: '用户没有权限'
 * 403: '用户访问被禁止'
 * 404: '请求不存在，服务器没有进行操作'
 * 406: '请求的格式错误'
 * 410: '资源被永久删除'
 * 422: '验证错误'
 * 500: '服务器发生错误，请检查服务器'
 * 502: '网关错误'
 * 503: '服务不可用，服务器暂时过载或维护'
 * 504: '网关超时'
 * @param url string  请求 API
 */
export const fetchFn = (url: string, { contentType = 'json', ...fetchOption }: QueryFnOptions = {}) => {
  return fetch(url, getFetchOption(contentType, fetchOption))
    .then((res) => {
      if (!/(200|201)/.test(String(res.status))) {
        throw new Response('', {
          status: res.status,
          headers: res.headers,
          statusText: `${res.statusText} - ${res.url || ''}`,
        });
      }
      return res.json();
    })
    .catch((err: Error) => {
      throw new Response('', {
        status: 500,
        statusText: `${err.message} - ${url || ''}`,
      });
    });
};