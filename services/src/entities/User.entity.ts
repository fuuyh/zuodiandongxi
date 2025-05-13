import { Expose, Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsIn,
  IsBoolean,
  IsDate,
  IsUUID,
} from 'class-validator';

export class UserEntity {
  @Expose({ name: 'id' })
  @IsOptional()
  public id!: string;

  @Expose({ name: 'username' })
  @IsString({ message: '用户名必须是字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @MinLength(3, { message: '用户名不能少于3个字符' })
  @MaxLength(50, { message: '用户名不能超过50个字符' })
  public username!: string;

  @Expose({ name: 'password' })
  @IsString({ message: '密码必须是字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码不能少于6个字符' })
  public password!: string;

  @Expose({ name: 'email' })
  @IsEmail({}, { message: '请输入有效的电子邮件地址' })
  @IsOptional()
  public email?: string;

  @Expose({ name: 'phone_number' })
  @IsOptional()
  @IsString({ message: '电话号码必须是字符串' })
  public phoneNumber?: string;

  @Expose({ name: 'status' })
  @IsOptional()
  @IsIn(['0', '1'], { message: '状态必须是 0 或 1' })
  public status?: '0' | '1';

  @Expose({ name: 'is_admin' })
  @IsOptional()
  public isAdmin?: boolean;

  @Expose({ name: 'create_time' })
  @Type(() => Date)
  @IsOptional()
  @IsDate({ message: '创建时间必须是日期类型' })
  public createTime?: Date;

  @Expose({ name: 'update_time' })
  @Type(() => Date)
  @IsOptional()
  @IsDate({ message: '更新时间必须是日期类型' })
  public updateTime?: Date;

  @Expose({ name: 'last_login_time' })
  @Type(() => Date)
  @IsOptional()
  @IsDate({ message: '最后登录时间必须是日期类型' })
  public lastLoginTime?: Date;

  @Expose({ name: 'remark' })
  @IsOptional()
  @IsString({ message: '备注必须是字符串' })
  public remark?: string;
}