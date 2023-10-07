import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FigureController } from './figure.controller';
import { FigureService } from './figure.service';

@Module({
  controllers: [FigureController],
  providers: [FigureService, PrismaService],
})
export class FigureModule {}
