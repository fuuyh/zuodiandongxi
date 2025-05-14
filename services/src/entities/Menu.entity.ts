import {
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  IsIn,
  MinLength,
  MaxLength,
} from 'class-validator';

export class MenuEntity {
  @IsOptional()
  public id!: string;

  @IsString({ message: '菜单名称必须是字符串' })
  @IsNotEmpty({ message: '菜单名称不能为空' })
  @MinLength(2, { message: '菜单名称不能少于2个字符' })
  @MaxLength(50, { message: '菜单名称不能超过50个字符' })
  public menuName!: string;

  @IsOptional()
  @IsString()
  public parentId!: string | null;

  @IsOptional()
  @IsNumber()
  public orderNum!: number;

  @IsOptional()
  @IsString()
  public path!: string;

  @IsOptional()
  @IsString()
  public component!: string;

  @IsOptional()
  @IsString()
  public query!: string;

  @IsOptional()
  @IsString()
  public routeName!: string;

  @IsOptional()
  @IsNumber()
  public isFrame!: number;

  @IsOptional()
  @IsNumber()
  public isCache!: number;

  @IsOptional()
  @IsString()
  public menuType!: string;

  @IsOptional()
  @IsIn(['0', '1'], { message: 'visible 必须是 0 或 1' })
  public visible!: string;

  @IsOptional()
  @IsIn(['0', '1'], { message: 'status 必须是 0 或 1' })
  public status!: string;

  @IsOptional()
  @IsString()
  public icon!: string;

  @IsOptional()
  @IsString()
  public remark!: string;
}