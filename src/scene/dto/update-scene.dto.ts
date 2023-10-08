import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateSceneDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
}
