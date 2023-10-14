import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      signOptions: { expiresIn: '7d' },
      secret: process.env.REFRESH_TOKEN_SECRET,
    }),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
