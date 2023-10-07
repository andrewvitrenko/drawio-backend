import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SceneController } from './scene.controller';
import { SceneService } from './scene.service';

@Module({
  controllers: [SceneController],
  providers: [SceneService, PrismaService],
})
export class SceneModule {}
