import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UseJwtGuard } from '../guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@UseJwtGuard()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
