import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
} from 'class-validator';
import { startWith } from 'rxjs';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 10)
  title: string;

  @IsString({ message: 'Must be string' })
  @IsOptional()
  description: string;

  @IsNumber({}, { message: 'Priority is set number' })
  @IsInt({ message: 'Priority is number' })
  @IsPositive({ message: 'Only positive numbers' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Tags must be an array' })
  // @IsString({ each: true, message: 'Tag must be a string' })
  @IsEnum(TaskTag, { each: true, message: 'Invalid tag value' })
  @IsOptional()
  tags: string[];

  @IsString({ message: 'Must be string' })
  @Length(6, 10, { message: 'Minimum chars are 6, maximum - 10' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/)
  password: string;

  @IsUrl(
    {
      protocols: ['https', 'wss'],
      require_protocol: true,
      require_port: true,
      require_valid_protocol: true,
      host_whitelist: ['google.com'],
      host_blacklist: ['yandex.ru'],
    },
    { message: 'Must be valid email' },
  )
  websiteUrl: string;

  @IsUUID('4', { message: 'Incorrect format UUID' })
  userId: string;
}
