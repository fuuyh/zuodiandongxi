import { Expose, Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsDate,
  IsNotEmpty,
  IsIn,
  MinLength,
  MaxLength,
} from 'class-validator';

export class MenuEntity {
  @Expose({ name: 'id' })
  @IsOptional()
  public id!: string;

  @Expose({ name: 'menu_name' })
  @IsString({ message: '菜单名称必须是字符串' })
  @IsNotEmpty({ message: '菜单名称不能为空' })
  @MinLength(2, { message: '菜单名称不能少于2个字符' })
  @MaxLength(50, { message: '菜单名称不能超过50个字符' })
  public menuName!: string;

  @Expose({ name: 'parent_id' })
  @IsOptional()
  @IsString()
  public parentId!: string | null;

  @Expose({ name: 'order_num' })
  @IsOptional()
  @IsNumber()
  public orderNum!: number;

  @Expose({ name: 'path' })
  @IsOptional()
  @IsString()
  public path!: string;

  @Expose({ name: 'component' })
  @IsOptional()
  @IsString()
  public component!: string;

  @Expose({ name: 'query' })
  @IsOptional()
  @IsString()
  public query!: string;

  @Expose({ name: 'route_name' })
  @IsOptional()
  @IsString()
  public routeName!: string;

  @Expose({ name: 'is_frame' })
  @IsOptional()
  @IsNumber()
  public isFrame!: number;

  @Expose({ name: 'is_cache' })
  @IsOptional()
  @IsNumber()
  public isCache!: number;

  @Expose({ name: 'menu_type' })
  @IsOptional()
  @IsString()
  public menuType!: string;

  @Expose({ name: 'visible' })
  @IsOptional()
  @IsIn(['0', '1'], { message: 'visible 必须是 0 或 1' })
  public visible!: string;

  @Expose({ name: 'status' })
  @IsOptional()
  @IsIn(['0', '1'], { message: 'status 必须是 0 或 1' })
  public status!: string;

  @Expose({ name: 'perms' })
  @IsOptional()
  @IsString()
  public perms!: string;

  @Expose({ name: 'icon' })
  @IsOptional()
  @IsString()
  public icon!: string;

  @Expose({ name: 'create_by' })
  @IsOptional()
  @IsString()
  public createBy!: string;

  @Expose({ name: 'create_time' })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  public createTime!: Date;

  @Expose({ name: 'update_by' })
  @IsOptional()
  @IsString()
  public updateBy!: string;

  @Expose({ name: 'update_time' })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  public updateTime!: Date;

  @Expose({ name: 'remark' })
  @IsOptional()
  @IsString()
  public remark!: string;
}