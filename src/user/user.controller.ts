import { Body, Controller, Delete, Patch } from '@nestjs/common';

import { GetUserData } from '@/decorators/get-user-data.decorator';
import { UseJwtGuard } from '@/guards/jwt-auth.guard';

import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@UseJwtGuard()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Patch('/update')
  async update(
    @GetUserData('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(userId, updateUserDto);
  }

  @Delete('/delete')
  async remove(@GetUserData('userId') userId: number) {
    return this.userService.remove(userId);
  }
}
