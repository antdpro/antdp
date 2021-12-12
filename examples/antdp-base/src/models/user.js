import { useState } from 'react';
import { userLogin } from '@/services/api';
import { message } from 'antd';
import { history } from 'umi';
const getToken = () => sessionStorage.getItem('token');

export default function useModelUser() {
  const [isLogin, setIsLogin] = useState({ time2: 123456, fileList: [] });
  const [token, setToken] = useState(getToken());
  // 登录
  const login = async (params) => {
    const data = await userLogin(params);
    if (data.code === 1) {
      sessionStorage.setItem('token', data.token);
      const li2 = [
        '/',
        '/EditTable',
        '/welcome',
        '/dashboard',
        '/dashboard/demo',
        '/dashboard/workplace',
        '/dashboard/notfund',
        '/404',
        '/403',
      ];
      const btns = ['/demo/add1', '/demo/add2', '/demo/add3'];
      await sessionStorage.setItem('authBtn', JSON.stringify(btns));
      await sessionStorage.setItem('authMenu', JSON.stringify(li2));
      setToken(data.token);
      history.push('/');
    }
  };
  // 退出登录
  const logout = async () => {
    await sessionStorage.removeItem('token');
    setToken('');
    history.push('/login');
  };
  // 退出
  return {
    isLogin,
    token,
    login,
    logout,
  };
}
