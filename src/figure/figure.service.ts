import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Figure } from '@prisma/client';
import { CreateFigureDto } from './dto/create-figure.dto';
import { UpdateFigureDto } from './dto/update-figure.dto';

@Injectable()
export class FigureService {
  constructor(private prismaService: PrismaService) {}

  async get(id: number): Promise<Figure> {
    return this.prismaService.figure.findUniqueOrThrow({
      where: { id },
    });
  }

  async create(createFigureDto: CreateFigureDto): Promise<Figure> {
    return this.prismaService.figure.create({
      data: createFigureDto,
    });
  }

  async update(id: number, updateFigureBody: UpdateFigureDto): Promise<Figure> {
    return this.prismaService.figure.update({
      where: { id },
      data: updateFigureBody,
    });
  }

  async remove(id: number): Promise<Figure> {
    return this.prismaService.figure.delete({ where: { id } });
  }
}
