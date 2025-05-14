import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class UserRoleEntity {
  @IsString({ message: '用户ID必须是字符串' })
  @IsNotEmpty({ message: '用户ID不能为空' })
  public userId!: string;

  @IsString({ message: '角色ID必须是字符串' })
  @IsNotEmpty({ message: '角色ID不能为空' })
  public roleId!: string;
}