import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UseJwtGuard } from '../guards/jwt-auth.guard';
import { CreateSceneDto } from './dto/create-scene.dto';
import { UpdateSceneDto } from './dto/update-scene.dto';
import { SceneService } from './scene.service';

@UseJwtGuard()
@Controller('scene')
export class SceneController {
  constructor(private sceneService: SceneService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.sceneService.get(id);
  }

  @Post('/create')
  async create(@Body() createSceneDto: CreateSceneDto) {
    return this.sceneService.create(createSceneDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.sceneService.remove(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSceneDto: UpdateSceneDto,
  ) {
    return this.sceneService.update(id, updateSceneDto);
  }
}
