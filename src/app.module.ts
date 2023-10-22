import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { FigureModule } from './figure/figure.module';
import { PrismaModule } from './prisma/prisma.module';
import { SceneModule } from './scene/scene.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    FigureModule,
    SceneModule,
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}
