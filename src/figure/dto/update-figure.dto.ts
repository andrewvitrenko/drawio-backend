import { IsNumber, IsOptional, IsPositive } from 'class-validator';

// TODO: connect with CreateFigureDto and Figure model
export class UpdateFigureDto {
  @IsNumber()
  @IsOptional()
  width?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  @IsPositive()
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
