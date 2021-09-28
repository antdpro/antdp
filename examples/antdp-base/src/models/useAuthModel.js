import { useState, useCallback } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState({ A: 1212 });

  const signin = useCallback((account, password) => {
    console.log(112);
    // signin implementation
    // setUser(user from signin API)
  }, []);

  const signout = useCallback(() => {
    // signout implementation
    // setUser(null)
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
