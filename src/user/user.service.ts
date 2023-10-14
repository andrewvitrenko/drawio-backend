import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { exclude } from '../utils/exclude';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async create({
    password,
    ...userData
  }: CreateUserDto): Promise<Omit<User, 'password' | 'refreshTokens'>> {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const user = await this.prismaService.user.create({
      data: {
        ...userData,
        password: await hash(password, await genSalt()),
      },
      include: { Scene: true },
    });

    return exclude(user, ['password', 'refreshTokens']);
  }

  async remove(id: number): Promise<Omit<User, 'password' | 'refreshTokens'>> {
    const user = await this.prismaService.user.delete({
      where: { id },
    });

    return exclude(user, ['password', 'refreshTokens']);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password' | 'refreshTokens'>> {
    const user = await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
      include: { Scene: true },
    });

    return exclude(user, ['password', 'refreshTokens']);
  }

  async addRefreshToken(userId: number, token: string) {
    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        refreshTokens: {
          push: token,
        },
      },
    });
  }

  async clearRefreshTokens(userId: number) {
    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        refreshTokens: {
          set: [],
        },
      },
    });
  }

  async removeRefreshToken(userId: number, token: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    const refreshTokens = user.refreshTokens.filter(
      (savedToken) => savedToken !== token,
    );

    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        refreshTokens,
      },
    });
  }

  async updateRefreshTokens(userId: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    const refreshTokens = user.refreshTokens.filter((token) => {
      try {
        this.jwtService.verify(token);
        return true;
      } catch (e) {
        return false;
      }
    });

    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        refreshTokens,
      },
    });
  }
}
