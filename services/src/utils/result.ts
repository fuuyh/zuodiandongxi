export default {
  ok(msg = '操作成功', data = null) {
    return {
      code: 200,
      msg,
      data,
    };
  },
  err(msg = '操作失败', detail = null) {
    return {
      code: 500,
      msg,
      detail,
    };
  },
  // 
  unauthorized(msg = '账号或密码错误！', detail = null) {
    return {
      code: 401,
      msg,
      detail,
    };
  }
};