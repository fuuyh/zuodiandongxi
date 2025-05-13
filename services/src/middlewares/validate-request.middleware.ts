import { Context, Next } from 'koa';
import { plainToInstance } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';

/**
 * 通用请求校验中间件
 * @param dtoClass DTO 类型
 */
export const validateRequest = <T>(dtoClass: new () => T) => {
  return async (ctx: Context, next: Next) => {
    try {
      const requestData = ctx.request.body;

      // 转换为 DTO 实例
      const dto = plainToInstance(dtoClass, requestData);

      // 执行校验
      await validateOrReject(dto).catch((errors: ValidationError[]) => {
        const messages = errors.flatMap(e =>
          Object.values(e.constraints || {})
        );
        throw new Error(messages.join('; '));
      });

      // 将校验后的 DTO 挂载到 ctx.state 上供后续使用
      ctx.state.dto = dto;

      // 继续执行下一个中间件或控制器方法
      await next();
    } catch (error: any) {
      // 错误处理
      ctx.status = 400;
      ctx.body = {
        code: 400,
        message: error.message || '请求数据不合法',
        data: null,
      };
    }
  };
}; 