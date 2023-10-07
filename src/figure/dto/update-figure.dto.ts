import { IsNumber, IsOptional } from 'class-validator';

export class UpdateFigureDto {
  @IsNumber()
  @IsOptional()
  width?: number;

  @IsNumber()
  @IsOptional()
  height?: number;

  @IsNumber()
  @IsOptional()
  x1?: number;

  @IsNumber()
  @IsOptional()
  y1?: number;

  @IsNumber()
  @IsOptional()
  x2?: number;

  @IsNumber()
  @IsOptional()
  y2?: number;
}
