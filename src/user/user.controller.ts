import { Body, Controller, Delete, Patch, Request } from '@nestjs/common';
import { UseJwtGuard } from '../guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@UseJwtGuard()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Patch('/update')
  async update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.userId, updateUserDto);
  }

  @Delete('/delete')
  async remove(@Request() req) {
    return this.userService.remove(req.user.userId);
  }
}
