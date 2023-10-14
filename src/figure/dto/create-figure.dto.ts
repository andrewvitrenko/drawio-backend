import { IsNumber, IsPositive } from 'class-validator';

// TODO: connect with Figure model
export class CreateFigureDto {
  @IsNumber()
  @IsPositive()
  width: number;

  @IsNumber()
  @IsPositive()
  height: number;

  @IsNumber()
  x1: number;

  @IsNumber()
  y1: number;

  @IsNumber()
  x2: number;

  @IsNumber()
  y2: number;

  @IsNumber()
  sceneId: number;
}
