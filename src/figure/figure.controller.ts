import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Figure } from '@prisma/client';

import { CreateFigureDto } from './dto/create-figure.dto';
import { UpdateFigureDto } from './dto/update-figure.dto';
import { FigureService } from './figure.service';

@Controller('figure')
export class FigureController {
  constructor(private figureService: FigureService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Figure> {
    return this.figureService.get(id);
  }

  @Post('/create')
  async create(@Body() createFigureDto: CreateFigureDto): Promise<Figure> {
    return this.figureService.create(createFigureDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFigureBody: UpdateFigureDto,
  ): Promise<Figure> {
    return this.figureService.update(id, updateFigureBody);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Figure> {
    return this.figureService.remove(id);
  }
}
