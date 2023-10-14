import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { SceneService } from './scene.service';

@Controller('scene')
export class SceneController {
  constructor(private sceneService: SceneService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.sceneService.get(id);
  }

  @Post('/create')
  async create() {
    return this.sceneService.create();
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.sceneService.remove(id);
  }
}
