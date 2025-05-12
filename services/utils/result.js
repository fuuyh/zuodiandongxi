// utils/responseUtil.js
class Result {
  /**
   * 封装统一响应格式
   * @param {string} code 业务状态码
   * @param {string} msg 响应信息
   * @param {T} data 响应数据
   * @returns {Response<T>}
   */
  static ok(msg, data = null) {
    return {
      code: 200,
      msg: msg || '操作成功',
      data,
    };
  }
  static fail(msg, data = null) {
    return {
      code: 500,
      msg: msg || '操作失败',
      data,
    };
  }
  static error(msg, data = null) {
    return {
      code: 500,
      msg: msg || '操作失败',
      data,
    };
  }
  static unauthorized(msg, data = null) {
    return {
      code: 401,
      msg: msg || '未授权',
      data,
    };
  }
  static forbidden(msg, data = null) {
    return {
      code: 403,
      msg: msg || '禁止访问',
      data,
    };
  }
  static notFound(msg, data = null) {
    return {
      code: 404,
      msg: msg || '未找到',
      data,
    };
  }
  static badRequest(msg, data = null) {
    return {
      code: 400,
      msg: msg || '请求错误',
      data,
    };
  }
  static internalServerError(msg, data = null) {
    return {
      code: 500,
      msg: msg || '服务器错误',
      data,
    };
  }
  static unprocessableEntity(msg, data = null) {
    return {
      code: 422,
      msg: msg || '数据验证错误',
      data,
    };
  }
  static tooManyRequests(msg, data = null) {
    return {
      code: 429,
      msg: msg || '请求过于频繁',
      data,
    };
  }
  static serviceUnavailable(msg, data = null) {
    return {
      code: 503,
      msg: msg || '服务不可用',
      data,
    };
  }

}

module.exports = Result;