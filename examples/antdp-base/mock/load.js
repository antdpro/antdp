export default {
  'POST /api/loading/data': (req, res) => {
    const list = [];
    for (let i = 0; i < 100000; i++) {
      list[i] = {
        id: i,
        name: '张三',
        title: '标题',
      };
    }
    setTimeout(() => {
      res.send({
        code: 1,
        message: '查询成功',
        data: {
          rows: list,
          total: 100,
        },
      });
    }, 2000);
  },
};
