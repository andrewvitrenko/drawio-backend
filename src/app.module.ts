import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FigureController } from './figure/figure.controller';
import { FigureService } from './figure/figure.service';
import { PrismaService } from './prisma/prisma.service';
import { SceneController } from './scene/scene.controller';
import { SceneService } from './scene/scene.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, FigureController, SceneController],
  providers: [AppService, PrismaService, FigureService, SceneService],
})
export class AppModule {}
