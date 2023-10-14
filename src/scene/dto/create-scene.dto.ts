import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// TODO: connect with Scene model
export class CreateSceneDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
