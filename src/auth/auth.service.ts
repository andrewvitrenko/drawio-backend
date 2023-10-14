import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import { SignupUserDto } from './dto/signup-user.dto';
import { Tokens } from './types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(user: User): Promise<Tokens> {
    const tokens = this.generateTokens(user.id);

    await this.userService.addRefreshToken(user.id, tokens.refresh_token);
    await this.userService.updateRefreshTokens(user.id);

    return tokens;
  }

  async signup(
    registerUserDto: SignupUserDto,
  ): Promise<Omit<User, 'password' | 'refreshTokens'>> {
    return this.userService.create(registerUserDto);
  }

  async logout(userId: number) {
    await this.userService.clearRefreshTokens(userId);
    return this.userService.updateRefreshTokens(userId);
  }

  async refresh(userId: number, oldToken: string): Promise<Tokens> {
    await this.userService.removeRefreshToken(userId, oldToken);
    const tokens = this.generateTokens(userId);
    await this.userService.addRefreshToken(userId, tokens.refresh_token);

    return tokens;
  }

  generateTokens(userId: number): Tokens {
    const accessToken = this.jwtService.sign({ userId });
    const refreshToken = this.jwtService.sign(
      { userId },
      {
        expiresIn: '7d',
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      },
    );

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
}
