import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// TODO: connect with CreateSceneDto and Scene model
export class UpdateSceneDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
}
