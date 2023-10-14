import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Scene } from '@prisma/client';
import { CreateSceneDto } from './dto/create-scene.dto';
import { UpdateSceneDto } from './dto/update-scene.dto';

@Injectable()
export class SceneService {
  constructor(private prismaService: PrismaService) {}

  async get(id: number): Promise<Scene> {
    return this.prismaService.scene.findUniqueOrThrow({
      where: { id },
      include: { figures: true },
    });
  }

  async create(createSceneDto: CreateSceneDto): Promise<Scene> {
    return this.prismaService.scene.create({
      data: createSceneDto,
    });
  }

  async remove(id: number): Promise<Scene> {
    return this.prismaService.scene.delete({ where: { id } });
  }

  async update(id: number, updateSceneDto: UpdateSceneDto): Promise<Scene> {
    return this.prismaService.scene.update({
      where: { id },
      data: updateSceneDto,
    });
  }
}
