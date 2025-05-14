import {
  IsString,
  IsOptional,
  MinLength,
  MaxLength,
  IsNotEmpty
} from 'class-validator';

export class RoleEntity {
  @IsOptional()
  public id!: string;

  @IsString({ message: '角色名称必须是字符串' })
  @IsNotEmpty({ message: '角色名称不能为空' })
  @MinLength(2, { message: '角色名称不能少于2个字符' })
  @MaxLength(30, { message: '角色名称不能超过30个字符' })
  public roleName!: string;

  @IsString({ message: '角色标识必须是字符串' })
  @IsNotEmpty({ message: '角色标识不能为空' })
  @MinLength(2, { message: '角色标识不能少于2个字符' })
  @MaxLength(100, { message: '角色标识不能超过100个字符' })
  public roleKey!: string;

  @IsString()
  @MaxLength(1)
  public status!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  public delFlag!: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  public remark!: string;
}