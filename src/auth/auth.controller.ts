import { GetUserData } from '@/decorators/get-user-data.decorator';
import { UseJwtRefreshGuard } from '@/guards/jwt-auth-refresh.guard';
import { UseJwtGuard } from '@/guards/jwt-auth.guard';
import { UseLocalAuthGuard } from '@/guards/local-auth.guard';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';
import { RefreshTokenPayload } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseLocalAuthGuard()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@GetUserData() user: User) {
    return this.authService.login(user);
  }

  @Post('/signup')
  async register(@Body() signupUserDto: SignupUserDto) {
    return this.authService.signup(signupUserDto);
  }

  @UseJwtGuard()
  @HttpCode(HttpStatus.OK)
  @Post('/logout')
  async logout(@GetUserData('userId') userId: number) {
    return this.authService.logout(userId);
  }

  @UseJwtRefreshGuard()
  @HttpCode(HttpStatus.OK)
  @Post('/refresh')
  async refresh(@GetUserData() user: RefreshTokenPayload) {
    return this.authService.refresh(user.userId, user.refreshToken);
  }
}
