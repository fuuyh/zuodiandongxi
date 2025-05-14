import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class RoleMenuEntity {
  @IsString({ message: '角色ID必须是字符串' })
  @IsNotEmpty({ message: '角色ID不能为空' })
  public roleId!: string;

  @IsString({ message: '菜单ID必须是字符串' })
  @IsNotEmpty({ message: '菜单ID不能为空' })
  public menuId!: string;
}