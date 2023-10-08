import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSceneDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
