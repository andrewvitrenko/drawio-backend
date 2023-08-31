import { Injectable } from '@nestjs/common';
import { Scene } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SceneService {
  constructor(private prismaService: PrismaService) {}

  async get(id: number): Promise<Scene> {
    return this.prismaService.scene.findUniqueOrThrow({
      where: { id },
      include: { figures: true },
    });
  }

  async create(): Promise<Scene> {
    return this.prismaService.scene.create({
      data: { figures: {} },
    });
  }

  async remove(id: number): Promise<Scene> {
    return this.prismaService.scene.delete({ where: { id } });
  }
}
