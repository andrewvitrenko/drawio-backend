import { IsNumber } from 'class-validator';

export class UpdateFigureDto {
  @IsNumber()
  width: number;

  @IsNumber()
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
