import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { SceneController } from './scene.controller';
import { SceneService } from './scene.service';

@Module({
  imports: [PrismaModule],
  controllers: [SceneController],
  providers: [SceneService],
})
export class SceneModule {}
