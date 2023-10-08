import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import { SignupUserDto } from './dto/signup-user.dto';
import { AuthResponse, TokenPayload } from './types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: User): Promise<AuthResponse> {
    const token: TokenPayload = { userId: user.id };
    return {
      access_token: this.jwtService.sign(token),
    };
  }

  async signup(
    registerUserDto: SignupUserDto,
  ): Promise<Omit<User, 'password'>> {
    const user = this.userService.getByEmail(registerUserDto.email);

    if (user) {
      throw new ConflictException('User already exists');
    }

    return this.userService.create(registerUserDto);
  }
}
