export default {
  'POST /api/users/login': (req, res) => {
    const { username, password, phone, code, type } = req.body;
    if ((username === 'admin' && password === 'admin') || (code && phone)) {
      res.send({
        code: 1,
        message: '登录成功！',
        data: {
          type,
        },
        token: '3096208b45df735aeebf072e90a4',
      });
      return;
    }
    res.send({
      code: -1,
      message: '登录失败！',
      data: {
        type,
      },
      token: null,
    });
  },
};
