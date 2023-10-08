import { Body, Controller, Post, Request } from '@nestjs/common';
import { UseLocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseLocalAuthGuard()
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/signup')
  async register(@Body() signupUserDto: SignupUserDto) {
    return this.authService.signup(signupUserDto);
  }
}
