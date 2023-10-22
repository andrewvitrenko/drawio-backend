import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { SceneController } from './scene.controller';
import { SceneService } from './scene.service';

@Module({
  imports: [PrismaModule],
  controllers: [SceneController],
  providers: [SceneService],
})
export class SceneModule {}
