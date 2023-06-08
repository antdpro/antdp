import { history } from '@umijs/max';
import { useState } from 'react';
const getToken = () => sessionStorage.getItem('token');

export default function useModelUser() {
  const [state, setState] = useState({
    token: getToken(),
  });
  // 登录
  const login = async ({ token, data }) => {
    await sessionStorage.setItem('token', token);
    await sessionStorage.setItem('authBtn', JSON.stringify(data.btns));
    await sessionStorage.setItem('authMenu', JSON.stringify(data.menus));
    setState({ ...state, token: token });
    history.push('/');
  };
  // 退出登录
  const logout = async () => {
    await sessionStorage.removeItem('token');
    await sessionStorage.removeItem('authBtn');
    await sessionStorage.removeItem('authMenu');
    setState({ ...state, token: '' });
    history.push('/login');
  };
  return {
    token: state.token,
    login,
    logout,
  };
}
