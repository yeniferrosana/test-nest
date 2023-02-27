import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  @MaxLength(350)
  @ApiProperty()
  resume: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  @MaxLength(350)
  @ApiProperty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  img: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  goal: number;

  @IsNumber()
  @ApiProperty()
  accumulated: number;

  @IsDateString()
  //@IsNotEmpty()
  @ApiProperty()
  endDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  ownerType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  ownerId: string;
}
