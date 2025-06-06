export default {
  ok<T>(msg: string, data: T = null as T) {
    return { msg, data, code: 200 };
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