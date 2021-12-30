// An highlighted block
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { codeMessage, setToken, getToken, checkedCode } from './utils'

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};


const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});


// request请求拦截器, 改变url 或 options
request.interceptors.request.use((url: string, options: any) => {
  const token = getToken();
  if (token) {
    //如果有token 就走token逻辑
    const headers = {
      Authorization: setToken(),
      ...((options || {}).headers || {})
    };
    return ({
      url: url,
      options: { ...options, headers: headers },
    });
  }
  return ({
    url: url,
    options: options,
  });
});

// request响应拦截器, 统一处理错误信息
request.interceptors.response.use(async (response) => {
  let token = getToken();
  if (token) {
    sessionStorage.setItem('token', token);
  }
  const data = await response.clone().json();
  if ((data && data?.code)) {
    checkedCode(data.code, data?.message)
  }
  return response;
});

export default request;