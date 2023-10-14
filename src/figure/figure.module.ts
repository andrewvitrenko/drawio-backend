import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { FigureController } from './figure.controller';
import { FigureService } from './figure.service';

@Module({
  imports: [PrismaModule],
  controllers: [FigureController],
  providers: [FigureService],
})
export class FigureModule {}
