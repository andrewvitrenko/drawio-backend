import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { exclude } from '../utils/exclude';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async getById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async create({
    password,
    ...userData
  }: CreateUserDto): Promise<Omit<User, 'password'>> {
    const user = await this.prismaService.user.create({
      data: {
        ...userData,
        password: await hash(password, await genSalt()),
      },
      include: { Scene: true },
    });

    return exclude(user, ['password']);
  }

  async remove(id: number): Promise<Omit<User, 'password'>> {
    const user = await this.prismaService.user.delete({
      where: { id },
    });

    return exclude(user, ['password']);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
      include: { Scene: true },
    });

    return exclude(user, ['password']);
  }
}
