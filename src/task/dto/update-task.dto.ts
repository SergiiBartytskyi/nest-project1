import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Not be empty' })
  @Length(2, 10, { message: 'from 2 to 19 chars' })
  title: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsString({ message: 'Must be string' })
  @IsOptional()
  description: string;
}
