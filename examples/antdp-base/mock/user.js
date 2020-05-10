export default {
  'POST /api/users/login': (req, res) => {
    const { password, phone, type } = req.body;
    if (password === 'admin' && phone === 'admin') {
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
