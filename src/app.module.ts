import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FigureModule } from './figure/figure.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { SceneModule } from './scene/scene.module';

@Module({
  imports: [ConfigModule.forRoot(), FigureModule, SceneModule],
  imports: [
    ConfigModule.forRoot(),
    FigureModule,
    SceneModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
