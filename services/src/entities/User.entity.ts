import {
  IsString,
  IsOptional,
  IsEmail,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class UserEntity {
  @IsOptional()
  public id!: string;

  @IsString({ message: '用户名必须是字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @MaxLength(30, { message: '用户名不能超过30个字符' })
  public username!: string;

  @IsString({ message: '昵称必须是字符串' })
  @IsNotEmpty({ message: '昵称不能为空' })
  @MaxLength(30, { message: '昵称不能超过30个字符' })
  public nickName!: string;

  @IsString({ message: '用户类型必须是字符串' })
  @IsOptional()
  public userType?: string;

  @IsEmail({}, { message: '请输入有效的电子邮件地址' })
  @IsOptional()
  public email?: string;

  @IsString({ message: '电话号码必须是字符串' })
  @IsOptional()
  public phonenumber?: string;

  @IsString({ message: '性别必须是字符串' })
  @IsOptional()
  public sex?: string;

  @IsString({ message: '头像路径必须是字符串' })
  @IsOptional()
  public avatar?: string;

  @IsString({ message: '密码必须是字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsOptional()
  public password?: string;

  @IsString({ message: '状态必须是字符串' })
  @IsOptional()
  public status?: string;

  @IsString({ message: '备注必须是字符串' })
  @IsOptional()
  public remark?: string;
}